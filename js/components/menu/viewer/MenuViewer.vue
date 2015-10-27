<template>
    <div class="component__menu_viewer">
      <div class="menu_viewer_wrap">
        <div class="menu_viewer_head">
          <div class="menu_viewer_lang" v-show="showLangSeleciton">
            <ul class="menu_viewer_selection">
              <li class="menu_viewer_lang" v-repeat="langOptions" v-class="menu_viewer_lang_selected: value == selectedLang"><a href="javascript:;" v-on="click: onClickLang(value)">{{text}}</a></li>
            </ul>
          </div>
          <ul class="menu_viewer_nav">
            <li class="menu_viewer_tab" v-repeat="menus" v-class="menu_viewer_tab_selected: $index == selectedMenuIndex" v-on="click: onClickTab($index)">{{$data['menu_name_' + selectedLang]}}</li>
          </ul>
        </div>

        <div class="menu_viewer_body" v-if="selectedMenu">
          <div class="menu_viewer_desc">{{selectedMenu['menu_description_' + selectedLang]}}</div>
          <!--div class="menu_viewer_info">
            <div class="menu_viewer_info_label" v-show="selectedMenu.tax_included">Tax included</div>
          </div-->
          <div class="menu_viewer_section" v-repeat="selectedMenu.section_items">
            <h2 class="menu_viewer_section_name" v-show="$data['section_name_' + selectedLang]"><span>{{$data['section_name_' + selectedLang]}}</span></h2>
            <div class="menu_viewer_subsection" v-repeat="subsections">
              <h3 class="menu_viewer_subsection_name" v-show="$data['subsection_name_' + selectedLang]">{{$data['subsection_name_' + selectedLang]}}</h3>
              <ul class="menu_viewer_item_wrap">
                <li v-repeat="contents">
                  <component-item-viewer item="{{$data}}" selected-lang="{{selectedLang}}"></component-item-viewer>
                </li>
              </ul>
              <div class="menu_viewer_option_groups_wrap">
                <div v-repeat="option_groups">
                  <component-option-group-viewer item="{{$data}}" selected-lang="{{selectedLang}}"></component-option-group-viewer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-show="showFooter" class="menu_viewer_footer">
          <span class="footer_provider">
            Powered by <a href="http://ezmenu.jp/">EzMenu</a>
          </span>
        </div>
      </div>
    </div>
</template>

<script lang="babel">
import ComponentItemViewer from './ItemViewer.vue'
import ComponentOptionGroupViewer from './OptionGroupViewer.vue'

export default {

  props: ['menus', 'selectedLang', 'selectedMenuIndex', 'showLangSeleciton', 'showFooter'],

  data() {
    return {
      showLangSeleciton: true,
      showFooter: false,
      selectedLang: 'ja',
      selectedMenuIndex: 0,
      menus: [],
      defaultLangOptions: [
        {
          'value': 'ja',
          'text': '日本語'
        },
        {
          'value': 'en',
          'text': 'English'
        },
        {
          'value': 'zh-CN',
          'text': '中文'
        }
      ]
    }
  },

  components: {
    'component-item-viewer': ComponentItemViewer,
    'component-option-group-viewer': ComponentOptionGroupViewer
  },

  created() {
    var initialLang = this.selectedLang
    // if no options exist, fall back to English
    var match = false
    this.defaultLangOptions.forEach((obj) => {
      if (initialLang === obj.value) {
        match = true
      }
    })
    if (!match) {
      this.selectedLang = 'en'
    }
  },

  computed: {
    langOptions() {
      // temp to show only items which has menu_name_xx in each language
      var options = []
      var firstMenu = this.menus[0]
      if (firstMenu) {
        this.defaultLangOptions.forEach((obj) => {
          if (firstMenu['menu_name_' + obj.value]) {
            options.push(obj)
          }
        })
      }
      return options
    },

    selectedMenu() {
      return this.menus[this.selectedMenuIndex]
    }
  },

  methods: {
    onClickTab(index) {
      this.selectedMenuIndex = index
    },

    onClickLang(lang) {
      this.selectedLang = lang
    }
  }
}
</script>