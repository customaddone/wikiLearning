@extends('layouts.app')

@section('content')
    @component('components.nav')
    @endcomponent

    <div class="uk-offcanvas-content">

      <main>
        <section class="uk-section uk-section-primary" style="border-bottom: double 5px #ffffff;">
          <div class="uk-container uk-container-small">
            <h1 class="uk-heading-primary">WikiLearning</h1>
            <div>
              <p class="uk-text-meta">クソ狭い範囲に女子校が2つあって、町の至る所に二人組の女がいるのヤバくないですか？正気の沙汰ではない。しかも作中時間(サザエさん時空の可能性もあるのでこの表現は怪しくて、たぶんリリースからの経過時間が丸い(ストーリーの進行につれても関係性が変わる(それはそう)))に依存して関係性が変わってくるんですね～～～弦巻こころと奥沢美咲の関係性を見てほしい…。物量もヤバい。巨大な感情が洪水のように押し寄せてくる。</p>
            </div>
            <div uk-grid>
                <a href="#link-table" class="uk-button uk-button-default uk-width-2-5">Article</a>
                <a href="#link-accordion"class="uk-button uk-button-default uk-width-2-5">search</a>
            </div>
            <div uk-grid style="margin-top: 5px;">
                <a href="#"class="uk-button uk-button-default uk-width-2-5">Vocabula</a>
                <a href="#"class="uk-button uk-button-default uk-width-2-5">Setting</a>
            </div>
          </div>
        </section>
        <div style="padding-top: 20px; background-color: #1e87f0;"></div>

        <section class="uk-section" id="link-accordion">
          <div class="uk-container">
            <div class="uk-section-small　">
              <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="uk-grid">
                <div class="uk-flex-last@m">
                  <h1 class="uk-text-left uk-text-primary">
                      <span uk-icon="icon: hashtag"></span>
                      <strong> Wikipedia検索</strong>
                  </h1>
                </div>
              </div>
            </div>
            <div class="uk-section-small uk-padding-remove uk" style="height: 450px;">
                <div class="uk-panel-box uk-form">
                    <div id="app">
                        <div class="">
                            <input type="text" class="uk-width-1-1 uk-form-large
                                uk-section-muted" v-model="searchword"
                                size="30" placeholder="Search" />
                        </div>
                        <ul uk-accordion v-for="(user, index) in users" v-bind:key="index">
                            <li>
                                <a :href="'articles/wikishow/' + user.title " class=
                                    "siimple-btn siimple-btn--primary" style="margin-bottom:15px;">
                                    <h3 class="uk-accordion-title">@{{ user.title }}
                                        <span style="font-size: 13px">detail</span>
                                    </h3>
                                </a>
                                <div class="uk-accordion-content">
                                    <div v-html="user.snippet"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
               </div>
           </div>
       </section>
       <script src="{{ asset('js/wikiAPI.js') }}"></script>

       <section class="uk-section uk-padding-remove" id="link-table">
         <div class="uk-container">
           <div class="uk-section-small">
             <div class="uk-grid-small uk-child-width-1-1 uk-child-width-1-2@m" uk-grid="uk-grid">
               <div class="uk-flex-last@m">
                 <h1 class="uk-text-right uk-text-primary">
                     <span uk-icon="icon: hashtag"></span>
                     <strong>作成記事一覧</strong>
                 </h1>
               </div>
               <div>
                 <p class="uk-text-meta">レスポンシブデザイン必須の時代に、「こうやってTableも対応させたらいいんじゃない？」というアイデアが詰まったUIkit3のテーブルコンポーネントです。。</p>
               </div>
             </div>
           </div>
           <div class="uk-section-small　uk-padding-remove">
             <table class="uk-table uk-table-divider uk-table-responsive">
               <thead>
                 <tr>
                   <th>HEAD1</th>
                   <th>HEAD2</th>
                   <th>HEAD3</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td>KEY1</td>
                   <td>VALUE</td>
                   <td>VALUE</td>
                 </tr>
                 <tr>
                   <td>KEY1</td>
                   <td>VALUE</td>
                   <td>VALUE</td>
                 </tr>
                 <tr>
                   <td>KEY1</td>
                   <td>VALUE</td>
                   <td>VALUE</td>
                 </tr>
                 <tr>
                   <td>KEY1</td>
                   <td>VALUE</td>
                   <td>VALUE</td>
                 </tr>
               </tbody>
             </table>
           </div>
           <hr class="uk-margin-small">
         </div>
       </section>

@endsection
