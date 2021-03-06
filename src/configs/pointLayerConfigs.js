const constructedConfig = {
	type: 'point',
	config: {
			dataId: 'monthly_percentile_data',
	    label: "Monthly Percentiles",
	    color: [
	        221,
	        178,
	        124
	    ],
	    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
	    isVisible: true,
	    isConfigActive: true,
	    highlightColor: [
	        252,
	        242,
	        26,
	        255
	    ],
	    hidden: false,
	    colorField: {
	        name: "scaled_rank",
	        format: "",
	        fieldIdx: 9,
	        type: "real",
	        analyzerType: "FLOAT"
	    },
	    colorDomain: [
	        0,
	        100
	    ],
	    colorScale: "quantize",
	    sizeDomain: [
	        0,
	        1
	    ],
	    sizeScale: "linear",
	    sizeField: null,
	    visConfig: {
	        radius: 20.8,
	        fixedRadius: false,
	        opacity: 0.8,
	        outline: true,
	        thickness: 1,
	        strokeColor: [25, 20, 16],
	        colorRange: {
	            name: "Uber Viz Diverging 3.5",
	            type: "diverging",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        strokeColorRange: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        radiusRange: [
	            0,
	            50
	        ],
	        filled: true
	    },
	    textLabel: [
	        {
	            field: null,
	            color: [
	                255,
	                255,
	                255
	            ],
	            size: 18,
	            offset: [
	                0,
	                0
	            ],
	            anchor: "start",
	            alignment: "center"
	        }
	    ],
	    colorUI: {
	        color: {
	            customPalette: {
	                name: "color.customPalette",
	                type: "custom",
	                category: "Custom",
	                colors: []
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 6,
	                reversed: false,
	                custom: false
	            }
	        },
	        colorRange: {
	            customPalette: {
	                name: "Custom Palette",
	                type: "custom",
	                category: "Custom",
	                colors: [
	                    "#009c1f",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#FFFF00",
                      "#FFFF00",
                      "#FFA700",
                      "#FA0606",
                      "#A706F8"
	                ]
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 10,
	                reversed: false,
	                custom: false
	            }
	        }
	    },
	    animation: {
	        enabled: false
	    },
	    strokeColorField: null,
	    strokeColorDomain: [
	        0,
	        1
	    ],
	    strokeColorScale: "quantile"
	},
	visConfigSettings: {
    radius: {
	        type: "number",
	        defaultValue: 10,
	        label: "layerVisConfigs.radius",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "radius",
	        property: "radius"
	    },
	    fixedRadius: {
	        defaultValue: false,
	        type: "boolean",
	        label: "layerVisConfigs.fixedRadius",
	        description: "layerVisConfigs.fixedRadiusDescription",
	        group: "radius",
	        property: "fixedRadius"
	    },
	    opacity: {
	        type: "number",
	        defaultValue: 0.8,
	        label: "layerVisConfigs.opacity",
	        isRanged: false,
	        range: [
	            0,
	            1
	        ],
	        step: 0.01,
	        group: "color",
	        property: "opacity"
	    },
	    outline: {
	        type: "boolean",
	        defaultValue: false,
	        label: "layer.outline",
	        property: "outline"
	    },
	    thickness: {
	        type: "number",
	        defaultValue: 2,
	        label: "layerVisConfigs.strokeWidth",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "stroke",
	        property: "thickness"
	    },
	    strokeColor: {
	        type: "color-select",
	        label: "layerVisConfigs.strokeColor",
	        defaultValue: null,
	        group: "color",
	        property: "strokeColor"
	    },
	    colorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.colorRange",
	        group: "color",
	        property: "colorRange"
	    },
	    strokeColorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.strokeColorRange",
	        group: "color",
	        property: "strokeColorRange"
	    },
	    radiusRange: {
	        type: "number",
	        defaultValue: [
	            0,
	            50
	        ],
	        isRanged: true,
	        range: [
	            0,
	            500
	        ],
	        step: 0.1,
	        label: "layerVisConfigs.radiusRange",
	        group: "radius",
	        property: "radiusRange"
	    },
	    filled: {
	        type: "boolean",
	        label: "layer.fillColor",
	        defaultValue: true,
	        property: "filled"
	    }
	}
}

const constructedConfig1 = {
	type: 'point',
	config: {
			dataId: 'fire_season_rank',
	    label: "Fire Season Percentiles",
	    color: [
	        221,
	        178,
	        124
	    ],
	    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
	    isVisible: false,
	    isConfigActive: true,
	    highlightColor: [
	        252,
	        242,
	        26,
	        255
	    ],
	    hidden: false,
	    colorField: {
	        name: "scaled_rank",
	        format: "",
	        fieldIdx: 9,
	        type: "real",
	        analyzerType: "FLOAT"
	    },
	    colorDomain: [
	        0,
	        100
	    ],
	    colorScale: "quantize",
	    sizeDomain: [
	        0,
	        1
	    ],
	    sizeScale: "linear",
	    sizeField: null,
	    visConfig: {
	        radius: 20.8,
	        fixedRadius: false,
	        opacity: 0.8,
	        outline: true,
	        thickness: 1,
	        strokeColor: [25, 20, 16],
	        colorRange: {
	            name: "Uber Viz Diverging 3.5",
	            type: "diverging",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        strokeColorRange: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        radiusRange: [
	            0,
	            50
	        ],
	        filled: true
	    },
	    textLabel: [
	        {
	            field: null,
	            color: [
	                255,
	                255,
	                255
	            ],
	            size: 18,
	            offset: [
	                0,
	                0
	            ],
	            anchor: "start",
	            alignment: "center"
	        }
	    ],
	    colorUI: {
	        color: {
	            customPalette: {
	                name: "color.customPalette",
	                type: "custom",
	                category: "Custom",
	                colors: []
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 6,
	                reversed: false,
	                custom: false
	            }
	        },
	        colorRange: {
	            customPalette: {
	                name: "Custom Palette",
	                type: "custom",
	                category: "Custom",
	                colors: [
	                    "#009c1f",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#FFFF00",
                      "#FFFF00",
                      "#FFA700",
                      "#FA0606",
                      "#A706F8"
	                ]
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 10,
	                reversed: false,
	                custom: false
	            }
	        }
	    },
	    animation: {
	        enabled: false
	    },
	    strokeColorField: null,
	    strokeColorDomain: [
	        0,
	        1
	    ],
	    strokeColorScale: "quantile"
	},
	visConfigSettings: {
    radius: {
	        type: "number",
	        defaultValue: 10,
	        label: "layerVisConfigs.radius",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "radius",
	        property: "radius"
	    },
	    fixedRadius: {
	        defaultValue: false,
	        type: "boolean",
	        label: "layerVisConfigs.fixedRadius",
	        description: "layerVisConfigs.fixedRadiusDescription",
	        group: "radius",
	        property: "fixedRadius"
	    },
	    opacity: {
	        type: "number",
	        defaultValue: 0.8,
	        label: "layerVisConfigs.opacity",
	        isRanged: false,
	        range: [
	            0,
	            1
	        ],
	        step: 0.01,
	        group: "color",
	        property: "opacity"
	    },
	    outline: {
	        type: "boolean",
	        defaultValue: false,
	        label: "layer.outline",
	        property: "outline"
	    },
	    thickness: {
	        type: "number",
	        defaultValue: 2,
	        label: "layerVisConfigs.strokeWidth",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "stroke",
	        property: "thickness"
	    },
	    strokeColor: {
	        type: "color-select",
	        label: "layerVisConfigs.strokeColor",
	        defaultValue: null,
	        group: "color",
	        property: "strokeColor"
	    },
	    colorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.colorRange",
	        group: "color",
	        property: "colorRange"
	    },
	    strokeColorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.strokeColorRange",
	        group: "color",
	        property: "strokeColorRange"
	    },
	    radiusRange: {
	        type: "number",
	        defaultValue: [
	            0,
	            50
	        ],
	        isRanged: true,
	        range: [
	            0,
	            500
	        ],
	        step: 0.1,
	        label: "layerVisConfigs.radiusRange",
	        group: "radius",
	        property: "radiusRange"
	    },
	    filled: {
	        type: "boolean",
	        label: "layer.fillColor",
	        defaultValue: true,
	        property: "filled"
	    }
	}
}

const constructedConfig2 = {
	type: 'point',
	config: {
			dataId: 'historical_monthly',
	    label: "historical monthly data",
	    color: [
	        221,
	        178,
	        124
	    ],
	    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
	    isVisible: true,
	    isConfigActive: true,
	    highlightColor: [
	        252,
	        242,
	        26,
	        255
	    ],
	    hidden: false,
	    colorField: {
	        name: "scaled_rank",
	        format: "",
	        fieldIdx: 9,
	        type: "real",
	        analyzerType: "FLOAT"
	    },
	    colorDomain: [
	        0,
	        100
	    ],
	    colorScale: "quantize",
	    sizeDomain: [
	        0,
	        1
	    ],
	    sizeScale: "linear",
	    sizeField: null,
	    visConfig: {
	        radius: 20.8,
	        fixedRadius: false,
	        opacity: 0.8,
	        outline: true,
	        thickness: 1,
	        strokeColor: [25, 20, 16],
	        colorRange: {
	            name: "Uber Viz Diverging 3.5",
	            type: "diverging",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        strokeColorRange: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        radiusRange: [
	            0,
	            50
	        ],
	        filled: true
	    },
	    textLabel: [
	        {
	            field: null,
	            color: [
	                255,
	                255,
	                255
	            ],
	            size: 18,
	            offset: [
	                0,
	                0
	            ],
	            anchor: "start",
	            alignment: "center"
	        }
	    ],
	    colorUI: {
	        color: {
	            customPalette: {
	                name: "color.customPalette",
	                type: "custom",
	                category: "Custom",
	                colors: []
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 6,
	                reversed: false,
	                custom: false
	            }
	        },
	        colorRange: {
	            customPalette: {
	                name: "Custom Palette",
	                type: "custom",
	                category: "Custom",
	                colors: [
	                    "#009c1f",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#FFFF00",
                      "#FFFF00",
                      "#FFA700",
                      "#FA0606",
                      "#A706F8"
	                ]
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 10,
	                reversed: false,
	                custom: false
	            }
	        }
	    },
	    animation: {
	        enabled: false
	    },
	    strokeColorField: null,
	    strokeColorDomain: [
	        0,
	        1
	    ],
	    strokeColorScale: "quantile"
	},
	visConfigSettings: {
    radius: {
	        type: "number",
	        defaultValue: 10,
	        label: "layerVisConfigs.radius",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "radius",
	        property: "radius"
	    },
	    fixedRadius: {
	        defaultValue: false,
	        type: "boolean",
	        label: "layerVisConfigs.fixedRadius",
	        description: "layerVisConfigs.fixedRadiusDescription",
	        group: "radius",
	        property: "fixedRadius"
	    },
	    opacity: {
	        type: "number",
	        defaultValue: 0.8,
	        label: "layerVisConfigs.opacity",
	        isRanged: false,
	        range: [
	            0,
	            1
	        ],
	        step: 0.01,
	        group: "color",
	        property: "opacity"
	    },
	    outline: {
	        type: "boolean",
	        defaultValue: false,
	        label: "layer.outline",
	        property: "outline"
	    },
	    thickness: {
	        type: "number",
	        defaultValue: 2,
	        label: "layerVisConfigs.strokeWidth",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "stroke",
	        property: "thickness"
	    },
	    strokeColor: {
	        type: "color-select",
	        label: "layerVisConfigs.strokeColor",
	        defaultValue: null,
	        group: "color",
	        property: "strokeColor"
	    },
	    colorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.colorRange",
	        group: "color",
	        property: "colorRange"
	    },
	    strokeColorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.strokeColorRange",
	        group: "color",
	        property: "strokeColorRange"
	    },
	    radiusRange: {
	        type: "number",
	        defaultValue: [
	            0,
	            50
	        ],
	        isRanged: true,
	        range: [
	            0,
	            500
	        ],
	        step: 0.1,
	        label: "layerVisConfigs.radiusRange",
	        group: "radius",
	        property: "radiusRange"
	    },
	    filled: {
	        type: "boolean",
	        label: "layer.fillColor",
	        defaultValue: true,
	        property: "filled"
	    }
	}
}

const configTemplate = {
	type: 'point',
	config: {
			dataId: '',
	    label: "",
	    color: [
	        221,
	        178,
	        124
	    ],
	    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
	    isVisible: true,
	    isConfigActive: true,
	    highlightColor: [
	        252,
	        242,
	        26,
	        255
	    ],
	    hidden: false,
	    colorField: {
	        name: "scaled_rank",
	        format: "",
	        fieldIdx: 9,
	        type: "real",
	        analyzerType: "FLOAT"
	    },
	    colorDomain: [
	        0,
	        100
	    ],
	    colorScale: "quantize",
	    sizeDomain: [
	        0,
	        1
	    ],
	    sizeScale: "linear",
	    sizeField: null,
	    visConfig: {
	        radius: 20.8,
	        fixedRadius: false,
	        opacity: 0.8,
	        outline: true,
	        thickness: 1,
	        strokeColor: [25, 20, 16],
	        colorRange: {
	            name: "Uber Viz Diverging 3.5",
	            type: "diverging",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        strokeColorRange: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#009c1f",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#009C1F",
                  "#FFFF00",
                  "#FFFF00",
                  "#FFA700",
                  "#FA0606",
                  "#A706F8"
	            ]
	        },
	        radiusRange: [
	            0,
	            50
	        ],
	        filled: true
	    },
	    textLabel: [
	        {
	            field: null,
	            color: [
	                255,
	                255,
	                255
	            ],
	            size: 18,
	            offset: [
	                0,
	                0
	            ],
	            anchor: "start",
	            alignment: "center"
	        }
	    ],
	    colorUI: {
	        color: {
	            customPalette: {
	                name: "color.customPalette",
	                type: "custom",
	                category: "Custom",
	                colors: []
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 6,
	                reversed: false,
	                custom: false
	            }
	        },
	        colorRange: {
	            customPalette: {
	                name: "Custom Palette",
	                type: "custom",
	                category: "Custom",
	                colors: [
	                    "#009c1f",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#009C1F",
                      "#FFFF00",
                      "#FFFF00",
                      "#FFA700",
                      "#FA0606",
                      "#A706F8"
	                ]
	            },
	            showSketcher: false,
	            showDropdown: false,
	            colorRangeConfig: {
	                type: "all",
	                steps: 10,
	                reversed: false,
	                custom: false
	            }
	        }
	    },
	    animation: {
	        enabled: false
	    },
	    strokeColorField: null,
	    strokeColorDomain: [
	        0,
	        1
	    ],
	    strokeColorScale: "quantile"
	},
	visConfigSettings: {
    radius: {
	        type: "number",
	        defaultValue: 10,
	        label: "layerVisConfigs.radius",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "radius",
	        property: "radius"
	    },
	    fixedRadius: {
	        defaultValue: false,
	        type: "boolean",
	        label: "layerVisConfigs.fixedRadius",
	        description: "layerVisConfigs.fixedRadiusDescription",
	        group: "radius",
	        property: "fixedRadius"
	    },
	    opacity: {
	        type: "number",
	        defaultValue: 0.8,
	        label: "layerVisConfigs.opacity",
	        isRanged: false,
	        range: [
	            0,
	            1
	        ],
	        step: 0.01,
	        group: "color",
	        property: "opacity"
	    },
	    outline: {
	        type: "boolean",
	        defaultValue: false,
	        label: "layer.outline",
	        property: "outline"
	    },
	    thickness: {
	        type: "number",
	        defaultValue: 2,
	        label: "layerVisConfigs.strokeWidth",
	        isRanged: false,
	        range: [
	            0,
	            100
	        ],
	        step: 0.1,
	        group: "stroke",
	        property: "thickness"
	    },
	    strokeColor: {
	        type: "color-select",
	        label: "layerVisConfigs.strokeColor",
	        defaultValue: null,
	        group: "color",
	        property: "strokeColor"
	    },
	    colorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.colorRange",
	        group: "color",
	        property: "colorRange"
	    },
	    strokeColorRange: {
	        type: "color-range-select",
	        defaultValue: {
	            name: "Global Warming",
	            type: "sequential",
	            category: "Uber",
	            colors: [
	                "#5A1846",
	                "#900C3F",
	                "#C70039",
	                "#E3611C",
	                "#F1920E",
	                "#FFC300"
	            ]
	        },
	        label: "layerVisConfigs.strokeColorRange",
	        group: "color",
	        property: "strokeColorRange"
	    },
	    radiusRange: {
	        type: "number",
	        defaultValue: [
	            0,
	            50
	        ],
	        isRanged: true,
	        range: [
	            0,
	            500
	        ],
	        step: 0.1,
	        label: "layerVisConfigs.radiusRange",
	        group: "radius",
	        property: "radiusRange"
	    },
	    filled: {
	        type: "boolean",
	        label: "layer.fillColor",
	        defaultValue: true,
	        property: "filled"
	    }
	}
}
const monthlyLayer = {
  type: 'point',
  config: {
    dataId: 'monthly_percentile_data',
	    label: "Monthly Percentiles",
    color: [18, 147, 154],
    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
    isVisible: true,
    visConfig: {
      radius: 10,
      fixedRadius: false,
      opacity: 0.8,
      outline: false,
      thickness: 2,
      colorRange: {
        name: 'Ice And Fire',
        type: 'diverging',
        category: 'Uber',
        colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
        reversed: true
      },
      radiusRange: [33.6, 96.2],
      'hi-precision': false
    }
  },
  visualChannels: {
    colorField: {
      name: 'Species',
      type: 'string'
    },
    colorScale: 'ordinal',
    sizeField: {
      name: 'Age',
      type: 'integer'
    },
    sizeScale: 'sqrt'
  }
}

const fireSeasonLayer = {
  type: 'point',
  config: {
    dataId: 'fire_season_rank',
	  label: "Fire Season Percentiles",
    color: [18, 147, 154],
    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
    isVisible: true,
    visConfig: {
      radius: 10,
      fixedRadius: false,
      opacity: 0.8,
      outline: false,
      thickness: 2,
      colorRange: {
        name: 'Ice And Fire',
        type: 'diverging',
        category: 'Uber',
        colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
        reversed: true
      },
      radiusRange: [33.6, 96.2],
      'hi-precision': false
    }
  },
  visualChannels: {
    colorField: {
      name: 'Species',
      type: 'string'
    },
    colorScale: 'ordinal',
    sizeField: {
      name: 'Age',
      type: 'integer'
    },
    sizeScale: 'sqrt'
  }
}

const historicalLayer = {
  type: 'point',
  config: {
    dataId: 'historical_monthly',
	    label: "historical monthly data",
    color: [18, 147, 154],
    columns: {
	        lat: "latitude",
	        lng: "longitude",
	        altitude:  ""
	    },
    isVisible: true,
    visConfig: {
      radius: 10,
      fixedRadius: false,
      opacity: 0.8,
      outline: false,
      thickness: 2,
      colorRange: {
        name: 'Ice And Fire',
        type: 'diverging',
        category: 'Uber',
        colors: ['#D50255', '#FEAD54', '#FEEDB1', '#E8FEB5', '#49E3CE', '#0198BD'],
        reversed: true
      },
      radiusRange: [33.6, 96.2],
      'hi-precision': false
    }
  },
  visualChannels: {
    colorField: {
      name: 'Species',
      type: 'string'
    },
    colorScale: 'ordinal',
    sizeField: {
      name: 'Age',
      type: 'integer'
    },
    sizeScale: 'sqrt'
  }
}

const constructedConfigTest = configTemplate
constructedConfigTest['config']['dataId'] = 'monthly_percentile_data'
constructedConfigTest['config']['label'] = 'Monthly Percentiles'

const makeConfigObj = (id, label, colorFieldName, visSetting) => {
	const newObj = {
		type: 'point',
		config: {
				dataId: id,
		    label: label,
		    color: [
		        221,
		        178,
		        124
		    ],
		    columns: {
		        lat: "latitude",
		        lng: "longitude",
		        altitude:  ""
		    },
		    isVisible: visSetting,
		    isConfigActive: true,
		    highlightColor: [
		        252,
		        242,
		        26,
		        255
		    ],
		    hidden: false,
		    colorField: {
		        name: colorFieldName,
		        format: "",
		        fieldIdx: 9,
		        type: "real",
		        analyzerType: "FLOAT"
		    },
		    colorDomain: [
		        0,
		        100
		    ],
		    colorScale: "quantize",
		    sizeDomain: [
		        0,
		        1
		    ],
		    sizeScale: "linear",
		    sizeField: null,
		    visConfig: {
		        radius: 20.8,
		        fixedRadius: false,
		        opacity: 0.8,
		        outline: true,
		        thickness: 1,
		        strokeColor: [25, 20, 16],
		        colorRange: {
		            name: "Uber Viz Diverging 3.5",
		            type: "diverging",
		            category: "Uber",
		            colors: [
		                "#009c1f",
	                  "#009C1F",
	                  "#009C1F",
	                  "#009C1F",
	                  "#009C1F",
	                  "#FFFF00",
	                  "#FFFF00",
	                  "#FFA700",
	                  "#FA0606",
	                  "#A706F8"
		            ]
		        },
		        strokeColorRange: {
		            name: "Global Warming",
		            type: "sequential",
		            category: "Uber",
		            colors: [
		                "#009c1f",
	                  "#009C1F",
	                  "#009C1F",
	                  "#009C1F",
	                  "#009C1F",
	                  "#FFFF00",
	                  "#FFFF00",
	                  "#FFA700",
	                  "#FA0606",
	                  "#A706F8"
		            ]
		        },
		        radiusRange: [
		            0,
		            50
		        ],
		        filled: true
		    },
		    textLabel: [
		        {
		            field: null,
		            color: [
		                255,
		                255,
		                255
		            ],
		            size: 18,
		            offset: [
		                0,
		                0
		            ],
		            anchor: "start",
		            alignment: "center"
		        }
		    ],
		    colorUI: {
		        color: {
		            customPalette: {
		                name: "color.customPalette",
		                type: "custom",
		                category: "Custom",
		                colors: []
		            },
		            showSketcher: false,
		            showDropdown: false,
		            colorRangeConfig: {
		                type: "all",
		                steps: 6,
		                reversed: false,
		                custom: false
		            }
		        },
		        colorRange: {
		            customPalette: {
		                name: "Custom Palette",
		                type: "custom",
		                category: "Custom",
		                colors: [
		                    "#009c1f",
	                      "#009C1F",
	                      "#009C1F",
	                      "#009C1F",
	                      "#009C1F",
	                      "#FFFF00",
	                      "#FFFF00",
	                      "#FFA700",
	                      "#FA0606",
	                      "#A706F8"
		                ]
		            },
		            showSketcher: false,
		            showDropdown: false,
		            colorRangeConfig: {
		                type: "all",
		                steps: 10,
		                reversed: false,
		                custom: false
		            }
		        }
		    },
		    animation: {
		        enabled: false
		    },
		    strokeColorField: null,
		    strokeColorDomain: [
		        0,
		        1
		    ],
		    strokeColorScale: "quantile"
		},
		visConfigSettings: {
	    radius: {
		        type: "number",
		        defaultValue: 10,
		        label: "layerVisConfigs.radius",
		        isRanged: false,
		        range: [
		            0,
		            100
		        ],
		        step: 0.1,
		        group: "radius",
		        property: "radius"
		    },
		    fixedRadius: {
		        defaultValue: false,
		        type: "boolean",
		        label: "layerVisConfigs.fixedRadius",
		        description: "layerVisConfigs.fixedRadiusDescription",
		        group: "radius",
		        property: "fixedRadius"
		    },
		    opacity: {
		        type: "number",
		        defaultValue: 0.8,
		        label: "layerVisConfigs.opacity",
		        isRanged: false,
		        range: [
		            0,
		            1
		        ],
		        step: 0.01,
		        group: "color",
		        property: "opacity"
		    },
		    outline: {
		        type: "boolean",
		        defaultValue: false,
		        label: "layer.outline",
		        property: "outline"
		    },
		    thickness: {
		        type: "number",
		        defaultValue: 2,
		        label: "layerVisConfigs.strokeWidth",
		        isRanged: false,
		        range: [
		            0,
		            100
		        ],
		        step: 0.1,
		        group: "stroke",
		        property: "thickness"
		    },
		    strokeColor: {
		        type: "color-select",
		        label: "layerVisConfigs.strokeColor",
		        defaultValue: null,
		        group: "color",
		        property: "strokeColor"
		    },
		    colorRange: {
		        type: "color-range-select",
		        defaultValue: {
		            name: "Global Warming",
		            type: "sequential",
		            category: "Uber",
		            colors: [
		                "#5A1846",
		                "#900C3F",
		                "#C70039",
		                "#E3611C",
		                "#F1920E",
		                "#FFC300"
		            ]
		        },
		        label: "layerVisConfigs.colorRange",
		        group: "color",
		        property: "colorRange"
		    },
		    strokeColorRange: {
		        type: "color-range-select",
		        defaultValue: {
		            name: "Global Warming",
		            type: "sequential",
		            category: "Uber",
		            colors: [
		                "#5A1846",
		                "#900C3F",
		                "#C70039",
		                "#E3611C",
		                "#F1920E",
		                "#FFC300"
		            ]
		        },
		        label: "layerVisConfigs.strokeColorRange",
		        group: "color",
		        property: "strokeColorRange"
		    },
		    radiusRange: {
		        type: "number",
		        defaultValue: [
		            0,
		            50
		        ],
		        isRanged: true,
		        range: [
		            0,
		            500
		        ],
		        step: 0.1,
		        label: "layerVisConfigs.radiusRange",
		        group: "radius",
		        property: "radiusRange"
		    },
		    filled: {
		        type: "boolean",
		        label: "layer.fillColor",
		        defaultValue: true,
		        property: "filled"
		    }
		}
	}
	return newObj
}

const monthlyTest = makeConfigObj('monthly_percentile_data', "Monthly Percentiles", "scaled_rank", false)  
const fireSeasonTest = makeConfigObj('fire_season_rank', "Fire Season Percentiles", "scaled_rank", true)  
const historicalTestMonthly = makeConfigObj('historical_monthly', 'historical monthly data', "scaled_rank", false)   
const historicalTestFireSeason = makeConfigObj('historical_fire_season', 'historical fire season data', "scaled_rank", false)   

export const config = {
	mapStyle: {styleType: 'nanbette'},
	visState: {
		// layers: [pointLayerConfig]
		// layers: [constructedConfig, constructedConfig1, constructedConfig2], // this one works when it's on the fire season config add ddata. if its on monhtly config then it only shows monthly points 
		layers: [fireSeasonTest, monthlyTest, historicalTestMonthly, historicalTestFireSeason], // this one works when it's on fire season one so must not care about layer order but where it is called for some reason
		// layers: [monthlyLayer, fireSeasonLayer, historicalLayer],
		interactionConfig: {
      tooltip: {
        fieldsToShow: {
          fire_season_rank: ['ec'],
        },
      enabled: true,
      },
      brush: {
        size: 0.5,
        enabled: false
      },
      geocoder: {
        enabled: false
      }
    }
		// layers: [shortWorksConfig]
	}
}
export const filterSettings = {
	value:[1619229581000, 1619308800000],
	dataId: ['historical_fire_season'],
	name: ['date'],
	type: 'timeRange',
	step: 1100,
	enlarged: false
}

export const singleFireSeason = 
			{
		    // id: 'wkztfg',
		    type: 'point',
		    config: {
		      dataId: 'historical_fire_season',
		      label: 'Fire Season Percentile Climatology',
		      color: [18, 147, 154],
		      colorField:{
		      	name: "scaled_rank",
		      	type: "real"
		      },
		      columns: {
		        lat: "latitude",
		        lng: "longitude",
		        altitude:  ""
				    },
		      isVisible: true,
		      colorDomain:[
		      	0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100
		      ],
		      "colorScale": "quantize",
		      visConfig:{
		      	radius: 20.8,
		      	opacity: 0.8,
		      	outline: true,
		      	thickness: 1,
		      	strokeColor: [25, 20, 16],
		      	"colorRange": {
                "name": "Uber Viz Diverging 3.5",
                "type": "diverging",
                "category": "Uber",
                "colors": [
                    "#00cc00", //0 - 10
                    "#00cc00", // to 20
                    "#00cc00", // to 30
                    "#00cc00", // to 40
                    "#00cc00", // to 50
                    "#ffff00", // to 60
                    "#ffff00", // to 70
                    "#ffa700", // to 80
                    "#fa0606", // to 90
                    "#a706f8" // to 100
                ]
            }
          }    
		    }
		  }