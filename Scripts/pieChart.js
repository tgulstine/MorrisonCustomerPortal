var pie = new d3pie("onTimePieChart", {
    size: {
        canvasHeight: 150,
        canvasWidth: 200,
        pieInnerRadius: 0,
        pieOuterRadius: "100%"
    },
    data: {
        sortOrder: "value-asc",
        smallSegmentGrouping: {
            enabled: true,
            value: 2,
            valueType: "percentage",
            label: "Other birds",
            color: "#000000"
        },
        content: [
            { label: "Yes", value: 54, color: "blue" },
            { label: "No", value: 8, color: "red" }
        ]
    },
    labels: {
        outer: {
            format: "label",
            hideWhenLessThanPercentage: null,
            pieDistance: 10
        },
        inner: {
            format: "percentage",
            color: "#FF0000",
            hideWhenLessThanPercentage: null
        },
        lines: {
            enabled: false
        }
    },
    misc:  {
        canvasPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        pieCenterOffset: {
            x: 0,
            y: 0
        }
    }
});