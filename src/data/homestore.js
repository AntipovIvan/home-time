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
  ],
  selectedCategory: "All",
};
