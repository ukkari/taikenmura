const sectionContent = {
  about: { 
    title: "私たちの信頼についてもっと詳しく", 
    content: `
      <p class="mb-4">体験村は、1999年より新潟県南魚沼市で地域の子どもたちに安全かつ豊かな自然体験を提供してきました。これまでに57,000人以上の子どもたちが参加し、子どもの自立心と協調性を育む活動を続けています。</p>
      <p class="mb-4">親と離れて活動することで、子どもたちは親の有り難みを感じ、親も子どもの良さに気づく機会となります。この「親子で自立・自律」の理念のもと、20年以上にわたり安全で質の高い自然体験プログラムを提供しています。</p>
      <p class="mb-4">地域の教育委員会や学校からの信頼も厚く、教育関係者からも高い評価をいただいています。子どもの成長に真剣に向き合い、一人ひとりの可能性を引き出すことを使命としています。</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <img src="https://via.placeholder.com/400x300" alt="体験村の活動風景" class="w-full rounded">
          <p class="text-sm mt-1">自然の中での活動風景</p>
        </div>
        <div>
          <img src="https://via.placeholder.com/400x300" alt="修了証書授与式" class="w-full rounded">
          <p class="text-sm mt-1">キャンプ修了証書授与式</p>
        </div>
      </div>
    `
  },
  safety: { 
    title: "安全管理への取り組みについてもっと詳しく", 
    content: `
      <p class="mb-4">体験村では、子どもたちの安全を最優先に考え、以下の取り組みを行っています：</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>専門スタッフによる監督：</strong> キャンプでは、5～8人のグループに専門トレーニングを受けたボランティアリーダーがつき、子どもたちと24時間行動を共にします。</li>
        <li><strong>安全マニュアルの整備：</strong> あらゆる状況に対応できるよう、詳細な安全マニュアルを整備し、定期的な研修を行っています。</li>
        <li><strong>医療体制：</strong> 近隣の医療機関と連携し、緊急時の対応体制を整えています。キャンプ中は常に救急キットを携帯し、応急処置の訓練を受けたスタッフが同行します。</li>
        <li><strong>保険加入：</strong> 全参加者は傷害保険に加入し、万が一の事故に備えています。</li>
        <li><strong>事前健康チェック：</strong> 参加前に健康状態を確認し、アレルギーや持病などの情報を収集して適切に対応しています。</li>
      </ul>
      <p class="mb-4">安全管理責任者の指揮のもと、リスクアセスメントを実施し、予防措置を徹底しています。天候の急変や自然災害に備えた避難計画も整備しており、すべてのスタッフが緊急時の対応手順を熟知しています。</p>
      <div class="bg-blue-50 p-4 rounded mb-4">
        <p class="font-bold">安全への取り組み事例：</p>
        <p>2023年度は、安全研修の強化により、軽微な怪我の発生率を前年比30%削減しました。すべてのプログラムは事前の安全審査を経て実施され、定期的な見直しと改善を行っています。</p>
      </div>
    `
  },
  philosophy: { 
    title: "教育理念と育む価値についてもっと詳しく", 
    content: `
      <p class="mb-4">体験村の教育理念は「自然の中で、子どもの自立心と協調性を育む」ことです。以下の3つの価値を大切にしています：</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div class="bg-green-50 p-4 rounded">
          <h3 class="font-bold mb-2">自己肯定感の向上</h3>
          <p>困難を乗り越える体験を通じて、「自分はできる」という自信を育みます。子どもたち自身が考え、決断し、行動することで、自己効力感を高めます。</p>
        </div>
        <div class="bg-yellow-50 p-4 rounded">
          <h3 class="font-bold mb-2">社会性・協調性の育成</h3>
          <p>グループ活動を通じて、他者との協力、コミュニケーション能力、思いやりの心を育みます。異年齢の子どもたちが交流し、多様性を尊重する姿勢を養います。</p>
        </div>
        <div class="bg-blue-50 p-4 rounded">
          <h3 class="font-bold mb-2">創造性と問題解決能力</h3>
          <p>自然の中での予測不能な状況に対応することで、創造的思考と問題解決能力を育みます。与えられた答えではなく、自ら考え出す力を重視しています。</p>
        </div>
      </div>
      <p class="mb-4">これらの理念は、日本の伝統的な「自然との共生」の価値観と、現代的な教育理論を融合させたものです。子どもたちが将来、変化の激しい社会で自立して生きていくための「非認知能力」を育むことを目指しています。</p>
      <p class="mb-4">体験村のプログラムは、遊びを通じた学び（プレイフル・ラーニング）の考え方を取り入れ、子どもたちが楽しみながら重要なライフスキルを身につけられるよう設計されています。</p>
    `
  },
  programs: { 
    title: "プログラム紹介についてもっと詳しく", 
    content: `
      <p class="mb-4">体験村では、お子様の年齢や経験に合わせた多彩なプログラムをご用意しています：</p>
      <div class="space-y-6 mb-4">
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold text-lg mb-2">長期キャンプ（5泊6日）</h3>
          <p class="mb-2">自己発見と挑戦の場として、5泊6日の長期キャンプを実施しています。自然の中での生活を通じて、生きる力を育みます。</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>対象年齢：小学3年生～中学3年生</li>
            <li>主な活動：テント設営、野外炊事、川遊び、登山、ナイトハイク、キャンプファイヤーなど</li>
            <li>開催時期：夏休み（7月下旬～8月中旬）、冬休み（12月下旬）</li>
          </ul>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold text-lg mb-2">短期体験（1泊2日・2泊3日）</h3>
          <p class="mb-2">初めてのお子様や低学年向けの短期プログラムです。基本的な野外活動を通じて、自然の楽しさを体験します。</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>対象年齢：満4歳～小学6年生</li>
            <li>主な活動：自然観察、クラフト作り、キャンプファイヤー、星空観察など</li>
            <li>開催時期：春休み（3月）、夏休み（7～8月）、秋（9～10月）</li>
          </ul>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold text-lg mb-2">親子キャンプ</h3>
          <p class="mb-2">家族で自然体験を楽しむプログラムです。親子の絆を深めながら、協力して活動します。</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>対象：3歳以上のお子様と保護者</li>
            <li>主な活動：野外炊事、クラフト作り、川遊び、親子レクリエーションなど</li>
            <li>開催時期：ゴールデンウィーク、9月、11月</li>
          </ul>
        </div>
      </div>
      <p class="mb-4">すべてのプログラムは、子どもたちの「やってみたい！」という気持ちを大切にし、自主性を尊重しています。安全に配慮しながらも、子どもたち自身が考え、決断する機会を提供しています。</p>
      <div class="bg-green-50 p-4 rounded">
        <p class="font-bold">2025年夏の新プログラム！</p>
        <p>「サイエンスキャンプ」が新登場！自然の中での科学実験や観察を通じて、科学的思考力を育みます。小学4～6年生対象、8月上旬開催予定。詳細は近日公開！</p>
      </div>
    `
  },
  staff: { 
    title: "スタッフ紹介についてもっと詳しく", 
    content: `
      <p class="mb-4">体験村のスタッフは、子どもたちの成長と安全を第一に考える専門家です。厳しい研修を経て、子どもたちをサポートします。</p>
      <div class="space-y-6 mb-4">
        <div class="bg-white shadow rounded p-4 flex flex-col md:flex-row items-center">
          <img src="https://via.placeholder.com/200x200" alt="武宮敬介" class="rounded-full w-32 h-32 md:mr-4 mb-4 md:mb-0">
          <div>
            <h3 class="font-bold text-lg">武宮敬介（たけみや けいすけ）</h3>
            <p class="text-gray-600">プロデューサー / 代表</p>
            <p class="mt-2">1995年より野外教育に携わり、2000年に体験村を設立。教育学修士、野外教育指導者、NEAL自然体験活動指導者。全国キャンプ協会理事も務める。「子どもたちの可能性を最大限に引き出す体験の場を作りたい」という信念のもと、プログラム開発と人材育成に取り組んでいる。</p>
          </div>
        </div>
        <div class="bg-white shadow rounded p-4 flex flex-col md:flex-row items-center">
          <img src="https://via.placeholder.com/200x200" alt="山田真理" class="rounded-full w-32 h-32 md:mr-4 mb-4 md:mb-0">
          <div>
            <h3 class="font-bold text-lg">山田真理（やまだ まり）</h3>
            <p class="text-gray-600">教育ディレクター</p>
            <p class="mt-2">元小学校教諭。15年の教育現場経験を活かし、体験村の教育プログラム開発を担当。子どもの発達心理学に精通し、年齢に応じた最適な学びの機会を設計。「子どもたちの好奇心を大切にした体験学習」をモットーに活動している。</p>
          </div>
        </div>
        <div class="bg-white shadow rounded p-4 flex flex-col md:flex-row items-center">
          <img src="https://via.placeholder.com/200x200" alt="佐藤健太" class="rounded-full w-32 h-32 md:mr-4 mb-4 md:mb-0">
          <div>
            <h3 class="font-bold text-lg">佐藤健太（さとう けんた）</h3>
            <p class="text-gray-600">安全管理責任者</p>
            <p class="mt-2">救急救命士の資格を持ち、リスクマネジメントのスペシャリスト。20年以上の野外活動指導経験があり、安全管理マニュアルの策定から現場での安全確保まで一貫して担当。スタッフの安全研修も監修している。</p>
          </div>
        </div>
      </div>
      <p class="mb-4">その他にも、多くの専門スタッフやボランティアリーダーが活動をサポートしています。すべてのスタッフは、救急法や子どもの心理に関する研修を受講し、安全で充実したプログラムを提供するために日々研鑽を積んでいます。</p>
      <div class="bg-blue-50 p-4 rounded">
        <h3 class="font-bold mb-2">ボランティアリーダー募集中！</h3>
        <p>子どもたちの成長をサポートするボランティアリーダーを随時募集しています。18歳以上で、子どもが好きな方、自然体験に興味のある方はぜひご応募ください。研修制度も充実しており、未経験の方も安心してスタートできます。</p>
      </div>
    `
  },
  testimonials: { 
    title: "参加者の声についてもっと詳しく", 
    content: `
      <p class="mb-4">実際に体験村のプログラムに参加したお子様や保護者の声をご紹介します。</p>
      <div class="space-y-6 mb-4">
        <div class="bg-white shadow rounded p-4">
          <div class="flex items-start">
            <img src="https://via.placeholder.com/100x100" alt="参加者写真" class="rounded-full w-12 h-12 mr-4">
            <div>
              <p class="italic mb-2">「初めは不安でしたが、5日目には『もっと長くいたい！』と言うほど楽しめました。自分でご飯を作ったり、テントを立てたりする経験は、家ではできない貴重な体験でした。友達もたくさんできて、また参加したいです！」</p>
              <p class="text-sm text-gray-600">小学5年生 男子（長期キャンプ参加）</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow rounded p-4">
          <div class="flex items-start">
            <img src="https://via.placeholder.com/100x100" alt="保護者写真" class="rounded-full w-12 h-12 mr-4">
            <div>
              <p class="italic mb-2">「子どもが自分で考えて行動できるようになりました。キャンプから帰ってきてからは、家の手伝いも進んでするようになり、成長を感じます。スタッフの方々の温かいサポートに感謝しています。安全面も徹底されており、安心して任せられました。」</p>
              <p class="text-sm text-gray-600">小学3年生の保護者（短期体験参加）</p>
            </div>
          </div>
        </div>
        <div class="bg-white shadow rounded p-4">
          <div class="flex items-start">
            <img src="https://via.placeholder.com/100x100" alt="親子写真" class="rounded-full w-12 h-12 mr-4">
            <div>
              <p class="italic mb-2">「親子キャンプに参加して、普段見られない子どもの一面を発見できました。自然の中で一緒に過ごす時間は、かけがえのない思い出になりました。同じ年頃の子どもを持つ他の家族とも交流でき、親にとっても貴重な経験でした。」</p>
              <p class="text-sm text-gray-600">4歳と7歳の子どもの保護者（親子キャンプ参加）</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-green-50 p-4 rounded mb-4">
        <h3 class="font-bold mb-2">参加後の変化（保護者アンケートより）</h3>
        <ul class="list-disc pl-5 space-y-1">
          <li>自分から進んで行動するようになった：87%</li>
          <li>他者への思いやりが増した：76%</li>
          <li>自信がついた：82%</li>
          <li>自然や環境への関心が高まった：91%</li>
          <li>再参加希望：93%</li>
        </ul>
      </div>
      <p>これらの声は、年間約3,000名の参加者からいただいたフィードバックの一部です。体験村では、すべての参加者から寄せられた声を真摯に受け止め、プログラムの改善に活かしています。</p>
    `
  },
  faq: { 
    title: "よくある質問についてもっと詳しく", 
    content: `
      <div class="space-y-6 mb-4">
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: 初めてのキャンプで不安があります。どのようなサポートがありますか？</h3>
          <p>A: 初参加のお子様には特に丁寧にサポートしています。事前説明会を開催し、持ち物や生活の流れについて詳しくご説明します。キャンプ中も経験豊富なスタッフが常に見守り、お子様が安心して過ごせるよう配慮しています。ホームシックになったお子様にも、個別に寄り添い、徐々に集団活動に馴染めるようサポートします。</p>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: 参加に年齢制限はありますか？</h3>
          <p>A: プログラムによって対象年齢が異なります。短期体験は満4歳から、長期キャンプは小学3年生から参加可能です。親子キャンプは3歳以上のお子様と保護者であれば参加できます。お子様の成長に合わせた最適なプログラムをご提案しますので、お気軽にご相談ください。</p>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: 送迎はどうなっていますか？</h3>
          <p>A: 東京、新潟、長野の主要駅から専用バスを運行しています。遠方からの参加者には、最寄り駅までの新幹線やバスの乗り継ぎ情報もご案内しています。スタッフが同行するので、初めての方も安心して参加いただけます。</p>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: アレルギーや持病がある場合でも参加できますか？</h3>
          <p>A: 多くの場合、参加可能です。申込時に詳しい情報をお知らせいただき、個別に対応を検討します。食物アレルギーの場合は除去食や代替食をご用意し、常時服用している薬がある場合は服薬管理をサポートします。必要に応じて、事前に医師の診断書をご提出いただくこともあります。</p>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: 雨天時のプログラムはどうなりますか？</h3>
          <p>A: 天候に関わらず、充実したプログラムを実施します。雨天時には屋内活動やテント内でのクラフト、雨の自然観察など、天候を生かしたプログラムに切り替えます。安全面に問題がある荒天時は、近隣の施設を利用することもあります。</p>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">Q: キャンプ中の写真や活動の様子は見られますか？</h3>
          <p>A: 長期キャンプでは、活動の様子を定期的にブログやSNSで公開しています。また、キャンプ後に活動写真をオンラインアルバムでご覧いただけます。個人情報保護の観点から、顔がはっきり写った写真の公開には事前に保護者の同意をいただいています。</p>
        </div>
      </div>
      <p class="mb-4">その他のご質問は、お電話（025-783-3377）またはメール（taikenmura4124@gmail.com）にてお気軽にお問い合わせください。また、定期的に開催する説明会でも、詳しくご説明しています。</p>
    `
  },
  contact: { 
    title: "お問い合わせについてもっと詳しく", 
    content: `
      <p class="mb-4">体験村へのお問い合わせは、以下の方法でお受けしています：</p>
      <div class="bg-white shadow rounded p-4 mb-4">
        <h3 class="font-bold mb-2">お問い合わせ先</h3>
        <p>住所：〒949-6680 新潟県南魚沼市下一日市855</p>
        <p>TEL：025-783-3377（受付時間：平日9:00～17:00）</p>
        <p>Eメール：<a href="mailto:taikenmura4124@gmail.com" class="text-blue-600 hover:underline">taikenmura4124@gmail.com</a></p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">アクセス方法</h3>
          <p class="mb-2">【公共交通機関をご利用の場合】</p>
          <ul class="list-disc pl-5 space-y-1 mb-2">
            <li>JR上越新幹線「越後湯沢駅」より路線バスで30分</li>
            <li>JR上越線「六日町駅」よりタクシーで15分</li>
          </ul>
          <p class="mb-2">【お車でお越しの場合】</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>関越自動車道「六日町IC」より約10分</li>
            <li>駐車場完備（30台収容可能）</li>
          </ul>
        </div>
        <div class="bg-white shadow rounded p-4">
          <h3 class="font-bold mb-2">説明会・見学会</h3>
          <p class="mb-2">キャンプ参加前に、説明会や施設見学会を定期的に開催しています。</p>
          <ul class="list-disc pl-5 space-y-1">
            <li>東京会場：毎月第2土曜日 14:00～（要予約）</li>
            <li>新潟会場：毎月第4日曜日 10:00～（要予約）</li>
            <li>オンライン説明会：毎週水曜日 20:00～（要予約）</li>
          </ul>
          <p class="mt-2">説明会のご予約は、お電話またはメールにてお申し込みください。</p>
        </div>
      </div>
      <div class="bg-yellow-50 p-4 rounded">
        <h3 class="font-bold mb-2">お問い合わせフォーム</h3>
        <p>近日中にオンラインお問い合わせフォームを設置予定です。それまでは、お電話またはメールにてお問い合わせください。</p>
      </div>
    `
  }
};

function toggleSectionContent(sectionId) {
  const section = document.getElementById(sectionId);
  const detailsContainer = section.querySelector('.section-details-container');
  
  if (!detailsContainer) {
    if (sectionContent[sectionId]) {
      const newDetailsContainer = document.createElement('div');
      newDetailsContainer.className = 'section-details-container mt-6 bg-white p-6 rounded-lg shadow hidden';
      
      const titleElement = document.createElement('h3');
      titleElement.className = 'text-xl font-bold mb-4 text-blue-700';
      titleElement.textContent = sectionContent[sectionId].title;
      
      const contentElement = document.createElement('div');
      contentElement.className = 'section-details-content';
      contentElement.innerHTML = sectionContent[sectionId].content;
      
      newDetailsContainer.appendChild(titleElement);
      newDetailsContainer.appendChild(contentElement);
      
      section.querySelector('.bg-white').after(newDetailsContainer);
      
      newDetailsContainer.classList.remove('hidden');
      
      const moreLink = section.querySelector('.more-link');
      if (moreLink) {
        moreLink.textContent = '閉じる';
        moreLink.classList.add('is-open');
      }
    }
  } else {
    if (detailsContainer.classList.contains('hidden')) {
      detailsContainer.classList.remove('hidden');
      const moreLink = section.querySelector('.more-link');
      if (moreLink) {
        moreLink.textContent = '閉じる';
        moreLink.classList.add('is-open');
      }
    } else {
      detailsContainer.classList.add('hidden');
      const moreLink = section.querySelector('.more-link');
      if (moreLink) {
        moreLink.textContent = 'もっと見る';
        moreLink.classList.remove('is-open');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const moreLinks = document.querySelectorAll('.more-link');
  moreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      toggleSectionContent(sectionId);
    });
  });
});
