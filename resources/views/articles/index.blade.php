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
              <p class="uk-text-meta">レスポンシブデザイン必須の時代に、「こうやってTableも対応させたらいいんじゃない？」というアイデアが詰まったUIkit3のテーブルコンポーネントです。セマンティックな構文が求められるHTMLで、他のタグだと代用ができない場合も多いため、個人的には結構な頻度で使っています。</p>
            </div>
            <div uk-grid>
                <div class="uk-button uk-button-default uk-width-2-5">Article</div>
                <div class="uk-button uk-button-default uk-width-2-5">search</div>
            </div>
            <div uk-grid style="margin-top: 5px;">
                <div class="uk-button uk-button-default uk-width-2-5">Wordbook</div>
                <div class="uk-button uk-button-default uk-width-2-5">Setting</div>
            </div>
          </div>
        </section>
        <div style="padding-top: 20px; background-color: #1e87f0;"></div>
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
            <div class="uk-section-small uk-padding-remove">
              <div class="uk-panel uk-panel-box uk-form">
                <div class="uk-form-row">
                  <input class="uk-width-1-1 uk-form-large" type="text" placeholder="Search">
                </div>
              </div>
              <ul uk-accordion>
                <li>
                  <h3 class="uk-accordion-title">タイトル 1</h3>
                  <div class="uk-accordion-content">
                    <p>コンテンツ 1 智ちに働けば角かどが立つ。情じょうに棹さおさせば流される。意地を通とおせば窮屈きゅうくつだ。とかくに人の世は住みにくい。</p>
                  </div>
                </li>
                <li>
                  <h3 class="uk-accordion-title">タイトル 2</h3>
                  <div class="uk-accordion-content">
                    <p>コンテンツ 2 智ちに働けば角かどが立つ。情じょうに棹さおさせば流される。意地を通とおせば窮屈きゅうくつだ。とかくに人の世は住みにくい。</p>
                  </div>
                </li>
                <li>
                  <h3 class="uk-accordion-title">タイトル 3</h3>
                  <div class="uk-accordion-content">
                    <p>コンテンツ 3 智ちに働けば角かどが立つ。情じょうに棹さおさせば流される。意地を通とおせば窮屈きゅうくつだ。とかくに人の世は住みにくい。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>


    <div id="app">
            <!-- formはいらないみたい -->
            キーワード：<input type="text" v-model="searchword" size="30" placeholder="" />

            <div v-for="(user, index) in users" v-bind:key="index">
                <div class="siimple-grid-col siimple-grid-col--4 siimple-grid-col--sm-12">
                    <div class="siimple-h2">@{{ user.title }}</div>
                    <div class="siimple-paragraph siimple--text-justify">
                        <div v-html="user.snippet"></div>
                    </div>
                    <!-- Show -->
                    <a :href="'articles/wikishow/' + user.title " class=
                            "siimple-btn siimple-btn--primary" style="margin-bottom:15px;">
                        送信
                    </a>
                </div>
            </div>
        </div>
        <script src="{{ asset('js/wikiAPI.js') }}"></script>
        <div class="siimple-rule"></div>

@endsection
