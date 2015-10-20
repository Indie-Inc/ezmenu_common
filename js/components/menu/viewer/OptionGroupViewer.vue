<template>
    <div class="component__menu_option_group_viewer">
      <div class="menu_option_group_title" v-show="item['text_' + selectedLang]">{{item['text_' + selectedLang]}}</div>
      <div class="manu_options_wrap">
        <div class="menu_option_item" v-repeat="item.options">
          <div class="menu_option_item_name">{{$data['name_' + selectedLang]}}</div>
          <div class="menu_option_item_price" v-show="price > 0">¥{{price}}</div>
        </div>
      </div>
    </div>
</template>

<script lang="babel">

export default {

  props: ['item', 'selectedLang'],

  data() {
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
    return {
      selectedLang: 'ja',
      item: {}
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