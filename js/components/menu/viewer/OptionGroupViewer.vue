<template>
    <div class="component__menu_option_group_viewer">
      <div class="menu_option_group_title" v-show="item['text_' + selectedLang]">{{item['text_' + selectedLang]}}</div>
      <div class="manu_options_wrap">
        <div class="menu_option_item" v-for="option in item.options">
          <div class="menu_option_item_name">{{option['name_' + selectedLang]}}</div>
          <div class="menu_option_item_price" v-show="option.price > 0">¥{{option.price}}</div>
        </div>
      </div>
    </div>
</template>

<script lang="babel">

export default {

  props: {
    'item': {
      type: Object
      // {
      //   "text_ja":"",
      //   "text_en":"",
      //   "type":"OPTION_ADD",
      //   "options":[
      //     "price":0,
      //     "name_ja":"",
      //     "name_en":""
      //   ]
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

  components: {
  },

  computed: {
  },

  methods: {
  }
}
</script>