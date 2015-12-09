<template>
  <div class="component__menu_item_viewer">
    <div class="menu_item_viewer_left" v-if="item.image">
      <img :src="item.image.url | resizeImage 200">
    </div>
    <div class="menu_item_viewer_right">
      <div class="menu_item_viewer_name">{{item['name_' + selectedLang]}}</div>
      <div class="menu_item_viewer_price" v-show="item.price !== 0">¥{{item.price | numberFormat}}</div>
      <div class="menu_item_viewer_desc">{{item['description_' + selectedLang]}}</div>
      <div class="menu_viewer_option_groups_wrap">
        <div v-for="optionGroup in item.option_groups">
          <component-option-group-viewer :item="optionGroup" :selected-lang="selectedLang"></component-option-group-viewer>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="babel">
import ComponentOptionGroupViewer from './OptionGroupViewer.vue'
import filter from '../../../common/filter.js'

export default {

  props: {
    'item': {
      type: Object
      // {
      //   "type":"MenuItem",
      //   "price":0,
      //   "name_ja":"",
      //   "name_en":"",
      //   "description_ja":"",
      //   "description_en":"",
      //   "option_groups":[]
      // }
    },
    'selectedLang': {
      type: String,
      default: 'ja'
    }
  },

  data() {
    return {
    }
  },

  created() {
  },

  components: {
    'component-option-group-viewer': ComponentOptionGroupViewer
  },

  computed: {
  },

  methods: {
  }
}
</script>