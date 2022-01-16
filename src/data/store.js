export default {
  services: [
    {
      id: 1,
      name: "バーチャル博物館にアクセスをできます",
      image: require("@/assets/services/museum.png"),
      image2: require("@/assets/services/museum2.png"),
      description:
        "ワシントンの国立自然史博物館やロンドンの大英博物館などの有名な博物館はオンライン体験を提供しており、視聴者は自宅の快適さから博物館の展示について学ぶことができます。",
      description2:
        "インタラクティブマップを使用して、美術館の展示を表示することができます",
      figcaption: "オンラインで博物館を探索することができます",
      category: "オンラインツアー",
      href: "https://britishmuseum.withgoogle.com/",
    },
    {
      id: 2,
      name: "有名なシェフによるクッキングレッスンを見られる",
      image: require("@/assets/services/cooking.png"),
      image2: require("@/assets/services/cooking2.png"),
      description:
        "シェフは、パンデミックの際に孤立した人々に料理のヒントやアドバイスを提供します。 Antoni Porowskiは、レシピを共有するためにInstagramで「QuarEye」と呼ばれるシリーズを立ち上げました。",
      description2:
        "彼が作った「Sequestered Salmon Squash」と「残り物の外に出して」も",
      figcaption: "アントニが「Keep Calm-lette.」を作っています",
      category: "健康の維持",
      href: "https://www.instagram.com/p/B90Oo5lHxYv/",
    },
    {
      id: 3,
      name: "ルネサンス絵画としてどのように見えるかを見る",
      image: require("@/assets/services/gahaku.png"),
      image2: require("@/assets/services/gahaku2.png"),
      description:
        "アーティストのAIGahakuは、自分撮りをルネサンス絵画に変えるウェブサイトを作成しました。自分の写真をアップロードして、以下のリンクからテストできます。",
      description2: "さまざまな写真変換スタイルを選択することもできます。",
      figcaption: "サイトは自分撮りをルネサンス絵画に変えます",
      category: "その他",
      href: "https://ai-art.tokyo/en/",
    },
    {
      id: 4,
      name: "オンライン集団療法に参加することができます",
      image: require("@/assets/services/health.png"),
      image2: require("@/assets/services/health2.png"),
      description:
        "コロナウイルスのパンデミックの最中に苦労している人々を助けることができるさまざまなオンラインメンタルヘルスリソースがあります",
      description2:
        "瞑想のいくつかのタイプから選ぶことができます。 心地よい音、メロディー、オーディオコースが用意されています",
      figcaption: "仮想メンタルヘルスリソース",
      category: "健康の維持",
      href: "https://www.calm.com/blog/take-a-deep-breath?utm_source=lifecycle&utm_medium=email&utm_campaign=difficult_times_nonsubs_031720",
    },
    {
      id: 5,
      name: "世界で最も有名な劇場のいくつかを探索してできます",
      image: require("@/assets/services/Arts＆Culture.png"),
      image2: require("@/assets/services/Arts＆Culture2.png"),
      description:
        "現在、物理的には一般公開されていませんが、ニューヨークのカーネギーホールなどの劇場やオペラハウスは、Google Arts＆Cultureから入手できます。",
      description2:
        "芸術的なミニゲーム、世界の建築、360度のビデオ、過去の作品の展示などから選択することができます",
      figcaption: "劇場のバーチャルツアーに参加できます",
      category: "オンラインツアー",
      href: "https://artsandculture.google.com/story/1gJiszMqltReJA",
    },
    {
      id: 6,
      name: "動物園は、人々が孤独を感じないようにするためにライブストリーミングを行っています",
      image: require("@/assets/services/SanDiegoZoo.png"),
      image2: require("@/assets/services/SanDiegoZoo2.png"),
      description:
        "サンディエゴ動物園のライブストリーミングには、動物の事前録画とライブ映像の両方があります。",
      description2:
        "十数台のカメラから動物の生活をオンラインで放送しています。 自然の生息地でそれらを見ることができます。",
      figcaption: "動物園をライブストリーミングを見られます",
      category: "オンラインツアー",
      href: "https://zoo.sandiegozoo.org/live-cams",
    },
    {
      id: 7,
      name: "自宅で行うオンラインボディワークアウトプログラムに参加します",
      image: require("@/assets/services/Yoga with Adriene.png"),
      image2: require("@/assets/services/Yoga with Adriene2.png"),
      description:
        "「Yoga with Adriene」は、Adrieneがさまざまな病気や心の状態に合わせて調整したさまざまなリビングルームのトレーニングセッションを含むYouTubeチャンネルです。",
      description2:
        "Adriannaの落ち着いた声とスムーズな動きにより、忙しい一日の仕事の後に運動不足を防ぎ、リラックスすることができます",
      figcaption: "チャンネル画像",
      category: "健康の維持",
      href: "https://www.youtube.com/user/yogawithadriene",
    },
    {
      id: 8,
      name: "オンライン英語コースに登録ことができます",
      image: require("@/assets/services/english.png"),
      image2: require("@/assets/services/english2.png"),
      description:
        "文化的関係と教育の機会のための英国の国際組織であなたの英語能力を向上をできます.",
      description2:
        "有料と無料の試用期間の両方で、さまざまな難易度のコースを多数選択できます",
      figcaption: "一般的な開発のためのスキルを向上",
      category: "トレーニングコース",
      href: "https://learnenglish.britishcouncil.org/online-courses",
    },
  ],
  selectedCategory: "All",
};
