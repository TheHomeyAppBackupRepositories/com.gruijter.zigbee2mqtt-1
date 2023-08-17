{
  date_code: '',
  definition: {
    description: 'RGB+CCT Zigbee LED Controller',
    exposes: [
      {
        features: [
          {
            access: 7,
            description: 'On/off state of this light',
            name: 'state',
            property: 'state',
            type: 'binary',
            value_off: 'OFF',
            value_on: 'ON',
            value_toggle: 'TOGGLE'
          },
          {
            access: 7,
            description: 'Brightness of this light',
            name: 'brightness',
            property: 'brightness',
            type: 'numeric',
            value_max: 254,
            value_min: 0
          },
          {
            access: 7,
            description: 'Color temperature of this light',
            name: 'color_temp',
            presets: [
              {
                description: 'Coolest temperature supported',
                name: 'coolest',
                value: 153
              },
              {
                description: 'Cool temperature (250 mireds / 4000 Kelvin)',
                name: 'cool',
                value: 250
              },
              {
                description: 'Neutral temperature (370 mireds / 2700 Kelvin)',
                name: 'neutral',
                value: 370
              },
              {
                description: 'Warm temperature (454 mireds / 2200 Kelvin)',
                name: 'warm',
                value: 454
              },
              {
                description: 'Warmest temperature supported',
                name: 'warmest',
                value: 500
              }
            ],
            property: 'color_temp',
            type: 'numeric',
            unit: 'mired',
            value_max: 500,
            value_min: 153
          },
          {
            access: 7,
            description: 'Color of this light in the CIE 1931 color space (x/y)',
            features: [
              { access: 7, name: 'x', property: 'x', type: 'numeric' },
              { access: 7, name: 'y', property: 'y', type: 'numeric' }
            ],
            name: 'color_xy',
            property: 'color',
            type: 'composite'
          }
        ],
        type: 'light'
      },
      {
        access: 2,
        description: 'Triggers an effect on the light (e.g. make light blink for a few seconds)',
        name: 'effect',
        property: 'effect',
        type: 'enum',
        values: [
          'blink',
          'breathe',
          'okay',
          'channel_change',
          'finish_effect',
          'stop_effect'
        ]
      },
      {
        access: 3,
        description: 'Do not disturb mode, when enabled this function will keep the light OFF after a power outage',
        name: 'do_not_disturb',
        property: 'do_not_disturb',
        type: 'binary',
        value_off: false,
        value_on: true
      },
      {
        access: 3,
        description: 'Power on behavior state',
        name: 'color_power_on_behavior',
        property: 'color_power_on_behavior',
        type: 'enum',
        values: [ 'initial', 'previous', 'cutomized' ]
      },
      {
        access: 1,
        description: 'Link quality (signal strength)',
        name: 'linkquality',
        property: 'linkquality',
        type: 'numeric',
        unit: 'lqi',
        value_max: 255,
        value_min: 0
      }
    ],
    model: 'ZLD-RCW',
    options: [
      {
        access: 2,
        description: 'Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to `0` (no transition).',
        name: 'transition',
        property: 'transition',
        type: 'numeric',
        value_min: 0
      },
      {
        access: 2,
        description: 'When enabled colors will be synced, e.g. if the light supports both color x/y and color temperature a conversion from color x/y to color temperature will be done when setting the x/y color (default true).',
        name: 'color_sync',
        property: 'color_sync',
        type: 'binary',
        value_off: false,
        value_on: true
      },
      {
        access: 2,
        description: "State actions will also be published as 'action' when true (default false).",
        name: 'state_action',
        property: 'state_action',
        type: 'binary',
        value_off: false,
        value_on: true
      }
    ],
    supports_ota: false,
    vendor: 'Moes'
  },
  disabled: false,
  endpoints: {
    '1': {
      bindings: [],
      clusters: {
        input: [
          'genIdentify',
          'genGroups',
          'genScenes',
          'genOnOff',
          'touchlink',
          'genLevelCtrl',
          'lightingColorCtrl',
          'manuSpecificTuya',
          'genBasic'
        ],
        output: [ 'genOta', 'genTime' ]
      },
      configured_reportings: [],
      scenes: []
    },
    '242': {
      bindings: [],
      clusters: { input: [], output: [ 'greenPower' ] },
      configured_reportings: [],
      scenes: []
    }
  },
  friendly_name: 'GU10 LED links',
  ieee_address: '0xa4c138133e0207f3',
  interview_completed: true,
  interviewing: false,
  manufacturer: '_TZ3210_rcggc0ys',
  model_id: 'TS0505B',
  network_address: 20461,
  power_source: 'Mains (single phase)',
  supported: true,
  type: 'Router'
}
{
  onoff: {
    access: 7,
    description: 'On/off state of this light',
    name: 'state',
    property: 'state',
    type: 'binary',
    value_off: 'OFF',
    value_on: 'ON',
    value_toggle: 'TOGGLE'
  },
  dim: {
    access: 7,
    description: 'Brightness of this light',
    name: 'brightness',
    property: 'brightness',
    type: 'numeric',
    value_max: 254,
    value_min: 0
  },
  light_temperature: {
    access: 7,
    description: 'Color temperature of this light',
    name: 'color_temp',
    presets: [
      {
        description: 'Coolest temperature supported',
        name: 'coolest',
        value: 153
      },
      {
        description: 'Cool temperature (250 mireds / 4000 Kelvin)',
        name: 'cool',
        value: 250
      },
      {
        description: 'Neutral temperature (370 mireds / 2700 Kelvin)',
        name: 'neutral',
        value: 370
      },
      {
        description: 'Warm temperature (454 mireds / 2200 Kelvin)',
        name: 'warm',
        value: 454
      },
      {
        description: 'Warmest temperature supported',
        name: 'warmest',
        value: 500
      }
    ],
    property: 'color_temp',
    type: 'numeric',
    unit: 'mired',
    value_max: 500,
    value_min: 153
  },
  effect: {
    access: 2,
    description: 'Triggers an effect on the light (e.g. make light blink for a few seconds)',
    name: 'effect',
    property: 'effect',
    type: 'enum',
    values: [
      'blink',
      'breathe',
      'okay',
      'channel_change',
      'finish_effect',
      'stop_effect'
    ]
  },
  color_power_on_behavior: {
    access: 3,
    description: 'Power on behavior state',
    name: 'color_power_on_behavior',
    property: 'color_power_on_behavior',
    type: 'enum',
    values: [ 'initial', 'previous', 'cutomized' ]
  },
  measure_linkquality: {
    access: 1,
    description: 'Link quality (signal strength)',
    name: 'linkquality',
    property: 'linkquality',
    type: 'numeric',
    unit: 'lqi',
    value_max: 255,
    value_min: 0
  }
}
[
  'onoff',
  'dim',
  'light_temperature',
  'effect',
  'color_power_on_behavior',
  'measure_linkquality'
]
[
  [
    'onoff',
    {
      access: 7,
      description: 'On/off state of this light',
      name: 'state',
      property: 'state',
      type: 'binary',
      value_off: 'OFF',
      value_on: 'ON',
      value_toggle: 'TOGGLE'
    }
  ],
  [
    'dim',
    {
      access: 7,
      description: 'Brightness of this light',
      name: 'brightness',
      property: 'brightness',
      type: 'numeric',
      value_max: 254,
      value_min: 0
    }
  ],
  [
    'light_temperature',
    {
      access: 7,
      description: 'Color temperature of this light',
      name: 'color_temp',
      presets: [
        {
          description: 'Coolest temperature supported',
          name: 'coolest',
          value: 153
        },
        {
          description: 'Cool temperature (250 mireds / 4000 Kelvin)',
          name: 'cool',
          value: 250
        },
        {
          description: 'Neutral temperature (370 mireds / 2700 Kelvin)',
          name: 'neutral',
          value: 370
        },
        {
          description: 'Warm temperature (454 mireds / 2200 Kelvin)',
          name: 'warm',
          value: 454
        },
        {
          description: 'Warmest temperature supported',
          name: 'warmest',
          value: 500
        }
      ],
      property: 'color_temp',
      type: 'numeric',
      unit: 'mired',
      value_max: 500,
      value_min: 153
    }
  ],
  [
    'effect',
    {
      access: 2,
      description: 'Triggers an effect on the light (e.g. make light blink for a few seconds)',
      name: 'effect',
      property: 'effect',
      type: 'enum',
      values: [
        'blink',
        'breathe',
        'okay',
        'channel_change',
        'finish_effect',
        'stop_effect'
      ]
    }
  ],
  [
    'color_power_on_behavior',
    {
      access: 3,
      description: 'Power on behavior state',
      name: 'color_power_on_behavior',
      property: 'color_power_on_behavior',
      type: 'enum',
      values: [ 'initial', 'previous', 'cutomized' ]
    }
  ],
  [
    'measure_linkquality',
    {
      access: 1,
      description: 'Link quality (signal strength)',
      name: 'linkquality',
      property: 'linkquality',
      type: 'numeric',
      unit: 'lqi',
      value_max: 255,
      value_min: 0
    }
  ]
]