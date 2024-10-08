import { __ } from '@wordpress/i18n';
import { BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { PanelBody, SelectControl, Button, Dashicon, PanelRow, TextControl, ToggleControl } from '@wordpress/components';
import { songSlOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { HelpPanel, InlineDetailMediaUpload, Label } from '../../../../../../Components';
import { produce } from 'immer';
import { gearIcon } from '../../../../../../Components/utils/icons';

const General = ({ attributes, setAttributes, setActiveIndex, device }) => {
    const { audioProperties, options, style } = attributes;
    const { align } = style;
    const { songSl, isOverlayIcon, isThumb, isVolume, isAutoPlay } = options;

    const addNewAudioProperty = () => {
        setAttributes({
            audioProperties: [...audioProperties, {
                title: 'Green Chair',
                artist: 'Diego Nava',
                cover: { id: null, url: '', alt: '', title: '' },
                audio: { id: null, url: '', title: '' }
            }]
        });
        setActiveIndex(audioProperties.length);
    };

    const updateAudioProperty = (index, type, val) => {
        const newAudioProperties = produce(audioProperties, draft => {
            draft[index][type] = val;
        });
        setAttributes({ audioProperties: newAudioProperties });
    };

    const duplicateAudioProperty = (e, index) => {
        e.preventDefault();
        setAttributes({ audioProperties: [...audioProperties.slice(0, index), { ...audioProperties[index] }, ...audioProperties.slice(index)] });
    }

    const removeAudioProperty = (e, index) => {
        e.preventDefault();
        setAttributes({ audioProperties: [...audioProperties.slice(0, index), ...audioProperties.slice(index + 1)] });
    }

    return (
        <>
            <div className='bpmpInspectorInfo mt10'>
                Need more block like this? Checkout the bundle ➡ <a href='https://wordpress.org/plugins/b-blocks' target='_blank' rel='noopener noreferrer'>B Blocks</a>
            </div>

            <HelpPanel slug='audio-player-block' />

            <PanelBody className='bPlPanelBody addRemoveItems' title={__('Add or Remove Audios', 'mp3player-block')}>
                <SelectControl
                    label={__('Choose Player', 'mp3player-block')}
                    labelPosition='left'
                    value={songSl}
                    options={songSlOptions}
                    onChange={(v) => setAttributes({ options: updateData(options, v, 'songSl') })}
                />
                {audioProperties.map((item, index) => {
                    const { title, artist, cover, audio } = item;

                    return <PanelBody key={index} className='bPlPanelBody editItem' title={__(`Audio No ${index + 1}:`, 'mp3player-block')} initialOpen={0 !== index ? false : true}>
                        <PanelRow>
                            <Label className=''>{__('Title:', 'mp3player-block')}</Label>
                            <TextControl value={title} onChange={val => updateAudioProperty(index, 'title', val)} />
                        </PanelRow>

                        <PanelRow>
                            <Label className=''>{__('Artist:', 'mp3player-block')}</Label>
                            <TextControl value={artist} onChange={val => updateAudioProperty(index, 'artist', val)} />
                        </PanelRow>

                        <Label>{__('Audio File:', 'mp3player-block')}</Label>
                        <InlineDetailMediaUpload value={audio} types={['audio']} onChange={val => updateAudioProperty(index, 'audio', val)} placeholder={__('Enter Audio URL', 'mp3player-block')} />

                        <Label>{__('Cover Photo:', 'mp3player-block')}</Label>
                        <InlineDetailMediaUpload value={cover} types={['image']} onChange={val => updateAudioProperty(index, 'cover', val)} placeholder={__('Enter Cover Image URL', 'mp3player-block')} />

                        {
                            options.isOverlayIcon && <>
                                <TextControl
                                    className='mt15'
                                    label={__('Social Link', 'mp3player-block')}
                                    placeholder='Enter or paste link...'
                                    value={item.link}
                                    onChange={val => updateAudioProperty(index, 'link', val)}
                                />
                                {item.link && <ToggleControl
                                    checked={options.newTab}
                                    label={__('Open in New Tab', 'mp3player-block')}
                                    onChange={(v) => setAttributes({ options: updateData(options, v, 'newTab') })}
                                />}

                            </>
                        }

                        <PanelRow className='itemAction mt20'>
                            {1 < audioProperties.length && <Button className='removeItem' label={__('Remove', 'mp3player-block')} onClick={e => removeAudioProperty(e, index)}><Dashicon icon='no' />{__('Remove', 'mp3player-block')}</Button>}

                            <Button className='duplicateItem' label={__('Duplicate', 'mp3player-block')} onClick={e => duplicateAudioProperty(e, index)}>{gearIcon}{__('Duplicate', 'mp3player-block')}</Button>
                        </PanelRow>
                    </PanelBody>;
                })}

                <div className='addItem'>
                    <Button label={__('Add New Audio', 'mp3player-block')} onClick={addNewAudioProperty}>
                        <Dashicon icon='plus' /> {__('Add New Audio', 'mp3player-block')}
                    </Button>
                </div>
            </PanelBody>

            <PanelBody className='bPlPanelBody' title={__('Player Options', 'mp3player-block')} initialOpen={false}>
                <ToggleControl
                    className='mt5'
                    checked={isOverlayIcon}
                    label={__('Social Link', 'mp3player-block')}
                    onChange={(v) => setAttributes({ options: updateData(options, v, 'isOverlayIcon') })}
                />
                <ToggleControl
                    className='mt5'
                    checked={isThumb}
                    label={__('Range Thumb', 'mp3player-block')}
                    onChange={(v) => setAttributes({ options: updateData(options, v, 'isThumb') })}
                />
                <ToggleControl
                    className='mt5'
                    checked={isAutoPlay}
                    label={__('Auto Play', 'mp3player-block')}
                    onChange={(v) => setAttributes({ options: updateData(options, v, 'isAutoPlay') })}
                />
                <ToggleControl
                    className='mt5'
                    checked={isVolume}
                    label={__('Display Volume', 'mp3player-block')}
                    onChange={(v) => setAttributes({ options: updateData(options, v, 'isVolume') })}
                />
            </PanelBody>

            <BlockControls>
                <AlignmentToolbar
                    value={align[device]}
                    onChange={(v) => setAttributes({ style: updateData(style, v, 'align', device) })}
                    label="Player Alignment For Slider"
                    describedBy={__('Player Alignment For Slider')}
                    alignmentControls={[
                        { title: __('Player in left', 'mp3player-block'), align: 'start', icon: 'align-left' },
                        { title: __('Player in center', 'mp3player-block'), align: 'center', icon: 'align-center' },
                        { title: __('Player in right', 'mp3player-block'), align: 'end', icon: 'align-right' }
                    ]} />
            </BlockControls>
            
        </>
    )
}

export default General