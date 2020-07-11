<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
    export default {
        name: 'VoiceIcon',
        props: {
            iconClass: {
                type: String,
                required: true
            },
            className: {
                type: String,
                default: ''
            }
        },
        computed: {
            iconName() {
                return `#icon-${this.iconClass}`
            },
            svgClass() {
                if (this.className) {
                    return `svg-icon ${this.className}`
                }
                return 'svg-icon'
            }
        }
    }
</script>

<style>
    .svg-icon {
        width: 35px;
        height: 35px;
        vertical-align: -0.15em;
        fill: currentColor; /* 此属性为更改svg颜色属性设置 */
        overflow: hidden;
    }
</style>
