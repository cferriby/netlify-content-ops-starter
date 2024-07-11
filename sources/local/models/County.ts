import { Model } from '@stackbit/types';

export const County: Model = {
    type: 'data',
    name: 'County',
    label: 'County',
    labelField: 'name',
    filePath: 'content/data/{slug}.json',
    fieldGroups: [
        {
            name: 'cardStyles',
            label: 'Card styles',
            icon: 'palette'
        },
        {
            name: 'settings',
            label: 'Settings',
            icon: 'gear'
        }
    ],
    fields: [
        {
            type: 'string',
            name: 'name',
            label: 'Name',
            required: true,
            default: 'County Name',
            hidden: false,
            localized: false
        },
        {
            type: 'string',
            name: 'role',
            label: 'Role',
            required: false,
            default: 'Role',
            hidden: false,
            localized: false
        },
        {
            type: 'markdown',
            name: 'info',
            label: 'Info',
            required: false,
            default:
                'County Info.',
            hidden: false,
            localized: false
        },
        {
            type: 'model',
            name: 'image',
            label: 'Image',
            required: false,
            hidden: false,
            localized: false,
            models: ['ImageBlock']
        },
        {
            type: 'enum',
            name: 'colors',
            label: 'Colors',
            required: false,
            default: 'bg-light-fg-dark',
            hidden: false,
            localized: false,
            options: [
                {
                    label: 'Light background, dark foreground',
                    value: 'bg-light-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$light',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral background, dark foreground',
                    value: 'bg-neutral-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$neutral',
                    borderColor: '#ececec'
                },
                {
                    label: 'Neutral alt background, dark foreground',
                    value: 'bg-neutralAlt-fg-dark',
                    textColor: '$dark',
                    backgroundColor: '$neutralAlt',
                    borderColor: '#ececec'
                },
                {
                    label: 'Dark background, light foreground',
                    value: 'bg-dark-fg-light',
                    textColor: '$light',
                    backgroundColor: '$dark',
                    borderColor: '#ececec'
                }
            ],
            group: 'cardStyles',
            controlType: 'palette'
        },
        {
            type: 'string',
            name: 'elementId',
            label: 'Element ID',
            description: 'The unique ID for an HTML element, must not contain whitespace',
            required: false,
            hidden: false,
            localized: false,
            group: 'settings'
        },
        {
            type: 'style',
            name: 'styles',
            label: 'Styles',
            required: false,
            hidden: false,
            localized: false,
            styles: {
                self: {
                    margin: ['tw0:96'],
                    padding: ['tw0:96'],
                    justifyContent: ['flex-start', 'flex-end', 'center'],
                    borderWidth: ['0:2', '4:8:4'],
                    borderStyle: '*',
                    borderColor: [
                        {
                            value: 'border-dark',
                            label: 'Dark',
                            color: '$dark'
                        },
                        {
                            value: 'border-light',
                            label: 'Light',
                            color: '$light'
                        },
                        {
                            value: 'border-neutral',
                            label: 'Neutral',
                            color: '$neutral'
                        },
                        {
                            value: 'border-neutralAlt',
                            label: 'Neutral alt',
                            color: '$neutralAlt'
                        },
                        {
                            value: 'border-primary',
                            label: 'Primary',
                            color: '$primary'
                        }
                    ],
                    borderRadius: '*',
                    textAlign: '*'
                }
            }
        }
    ]
};
