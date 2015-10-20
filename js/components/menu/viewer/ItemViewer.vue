<template>
    <div class="component__menu_item_viewer">
      <div class="menu_item_viewer_name">{{item['name_' + selectedLang]}}</div>
      <div class="menu_item_viewer_price" v-show="item.price > 0">¥{{item.price}}</div>
      <div class="menu_item_viewer_desc">{{item['description_' + selectedLang]}}</div>
      <div class="menu_viewer_option_groups_wrap">
        <div v-repeat="item.option_groups">
          <component-option-group-viewer item="{{$data}}" selected-lang="{{selectedLang}}"></component-option-group-viewer>
        </div>
      </div>
    </div>
</template>

<script lang="babel">
import ComponentOptionGroupViewer from './OptionGroupViewer.vue'

export default {

  props: ['item', 'selectedLang'],

  data() {
    // {
    //   "type":"MenuItem",
    //   "price":0,
    //   "name_ja":"",
    //   "name_en":"",
    //   "description_ja":"",
    //   "description_en":"",
    //   "option_groups":[]
    // }
    return {
      selectedLang: 'ja',
      item: {}
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