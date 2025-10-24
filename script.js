
// === クイズデータ（省略せずに全文入れてください） ===
const allSongs = [
  // amusica
  { title: "HappyBirthday", audio: "audio/sumika/amusica/HappyBirthday.mp3", choices: ["HappyBirthday", "Lamp", "願い", "祝祭"], answer: 0, chorusStart: 60 },
  { title: "JamaicaDynamite", audio: "audio/sumika/amusica/JamaicaDynamite.mp3", choices: ["JamaicaDynamite", "LateShow", "Traveling", "Lamp"], answer: 0, chorusStart: 58 },
  { title: "Lamp", audio: "audio/sumika/amusica/Lamp.mp3", choices: ["Lamp", "願い", "祝祭", "絶叫セレナーデ"], answer: 0, chorusStart: 55 },
  { title: "LateShow", audio: "audio/sumika/amusica/LateShow.mp3", choices: ["LateShow", "HappyBirthday", "Traveling", "本音"], answer: 0, chorusStart: 52 },
  { title: "Traveling", audio: "audio/sumika/amusica/Traveling.mp3", choices: ["Traveling", "Lamp", "願い", "白昼夢"], answer: 0, chorusStart: 50 },
  { title: "アルル", audio: "audio/sumika/amusica/アルル.mp3", choices: ["アルル", "Lamp", "願い", "祝祭"], answer: 0, chorusStart: 45 },
  { title: "イコール", audio: "audio/sumika/amusica/イコール.mp3", choices: ["イコール", "ハイヤーグラウンド", "願い", "絶叫セレナーデ"], answer: 0, chorusStart: 60 },
  { title: "センスオブワンダー", audio: "audio/sumika/amusica/センスオブワンダー.mp3", choices: ["センスオブワンダー", "Lamp", "祝祭", "本音"], answer: 0, chorusStart: 58 },
  { title: "ハイヤーグラウンド", audio: "audio/sumika/amusica/ハイヤーグラウンド.mp3", choices: ["ハイヤーグラウンド", "願い", "Lamp", "白昼夢"], answer: 0, chorusStart: 55 },
  { title: "わすれもの", audio: "audio/sumika/amusica/わすれもの.mp3", choices: ["わすれもの", "Lamp", "Traveling", "祝祭"], answer: 0, chorusStart: 52 },
  { title: "願い", audio: "audio/sumika/amusica/願い.mp3", choices: ["願い", "Lamp", "Traveling", "祝祭"], answer: 0, chorusStart: 45 },
  { title: "祝祭", audio: "audio/sumika/amusica/祝祭.mp3", choices: ["祝祭", "願い", "Lamp", "絶叫セレナーデ"], answer: 0, chorusStart: 60 },
  { title: "絶叫セレナーデ", audio: "audio/sumika/amusica/絶叫セレナーデ.mp3", choices: ["絶叫セレナーデ", "惰星のマーチ", "白昼夢", "本音"], answer: 0, chorusStart: 60 },
  { title: "惰星のマーチ", audio: "audio/sumika/amusica/惰星のマーチ.mp3", choices: ["惰星のマーチ", "Lamp", "願い", "祝祭"], answer: 0, chorusStart: 58 },
  { title: "白昼夢", audio: "audio/sumika/amusica/白昼夢.mp3", choices: ["白昼夢", "Lamp", "願い", "本音"], answer: 0, chorusStart: 55 },
  { title: "本音", audio: "audio/sumika/amusica/本音.mp3", choices: ["本音", "Lamp", "願い", "祝祭"], answer: 0, chorusStart: 50 },  // ← カンマ追加！
  // chime
  { title: "10時の方角", audio: "audio/sumika/chime/10時の方角.mp3", choices: ["10時の方角", "Monday", "Flower", "フィクション"], answer: 0, chorusStart: 45 },
  { title: "Familia", audio: "audio/sumika/chime/Familia.mp3", choices: ["Familia", "Flower", "Monday", "ファンファーレ"], answer: 0, chorusStart: 50 },
  { title: "Flower", audio: "audio/sumika/chime/Flower.mp3", choices: ["Flower", "Monday", "StrawberryFields", "秘密"], answer: 0, chorusStart: 55 },
  { title: "Hummingbird'sPort", audio: "audio/sumika/chime/Hummingbird'sPort.mp3", choices: ["Hummingbird'sPort", "Monday", "ペルソナプロムナード", "ホワイトマーチ"], answer: 0, chorusStart: 60 },
  { title: "Monday", audio: "audio/sumika/chime/Monday.mp3", choices: ["Monday", "Flower", "春夏秋冬", "フィクション"], answer: 0, chorusStart: 45 },
  { title: "StrawberryFields", audio: "audio/sumika/chime/StrawberryFields.mp3", choices: ["StrawberryFields", "Monday", "ファンファーレ", "秘密"], answer: 0, chorusStart: 50 },
  { title: "あの手、この手", audio: "audio/sumika/chime/あの手、この手.mp3", choices: ["あの手、この手", "ゴーストライター", "フィクション", "ペルソナプロムナード"], answer: 0, chorusStart: 55 },
  { title: "ゴーストライター", audio: "audio/sumika/chime/ゴーストライター.mp3", choices: ["ゴーストライター", "ファンファーレ", "Monday", "秘密"], answer: 0, chorusStart: 60 },
  { title: "ファンファーレ", audio: "audio/sumika/chime/ファンファーレ.mp3", choices: ["ファンファーレ", "Flower", "Monday", "春夏秋冬"], answer: 0, chorusStart: 45 },
  { title: "フィクション", audio: "audio/sumika/chime/フィクション.mp3", choices: ["フィクション", "Monday", "ペルソナプロムナード", "ホワイトマーチ"], answer: 0, chorusStart: 50 },
  { title: "ペルソナプロムナード", audio: "audio/sumika/chime/ペルソナプロムナード.mp3", choices: ["ペルソナプロムナード", "フィクション", "ホワイトマーチ", "秘密"], answer: 0, chorusStart: 55 },
  { title: "ホワイトマーチ", audio: "audio/sumika/chime/ホワイトマーチ.mp3", choices: ["ホワイトマーチ", "フィクション", "春夏秋冬", "秘密"], answer: 0, chorusStart: 60 },
  { title: "春夏秋冬", audio: "audio/sumika/chime/春夏秋冬.mp3", choices: ["春夏秋冬", "フィクション", "ホワイトマーチ", "秘密"], answer: 0, chorusStart: 45 },
  { title: "秘密", audio: "audio/sumika/chime/秘密.mp3", choices: ["秘密", "フィクション", "ペルソナプロムナード", "ホワイトマーチ"], answer: 0, chorusStart: 50 },
  // chorus
  { title: "DangDingDong", audio: "audio/sumika/chorus/DangDingDong.mp3", choices: ["DangDingDong", "Phoenix", "VINCENT", "シュガーソルト"], answer: 0, chorusStart: 45 },
  { title: "HaikaraFlamingo", audio: "audio/sumika/chorus/HaikaraFlamingo.mp3", choices: ["HaikaraFlamingo", "Phoenix", "Vermillion", "リビドー"], answer: 0, chorusStart: 50 },
  { title: "LoveLater", audio: "audio/sumika/chorus/LoveLater.mp3", choices: ["LoveLater", "Phoenix", "VINCENT", "マシロ"], answer: 0, chorusStart: 55 },
  { title: "Phoenix", audio: "audio/sumika/chorus/Phoenix.mp3", choices: ["Phoenix", "Vermillion", "シュガーソルト", "シリウス"], answer: 0, chorusStart: 60 },
  { title: "エス", audio: "audio/sumika/chorus/エス.mp3", choices: ["エス", "Phoenix", "VINCENT", "愛染"], answer: 0, chorusStart: 45 },
  { title: "StartingOver", audio: "audio/sumika/chorus/StartingOver.mp3", choices: ["StartingOver", "Phoenix", "Vermillion", "運命"], answer: 0, chorusStart: 50 },
  { title: "Vermillion", audio: "audio/sumika/chorus/Vermillion.mp3", choices: ["Vermillion", "Phoenix", "VINCENT", "シュガーソルト"], answer: 0, chorusStart: 55 },
  { title: "VINCENT", audio: "audio/sumika/chorus/VINCENT.mp3", choices: ["VINCENT", "Phoenix", "シュガーソルト", "シリウス"], answer: 0, chorusStart: 60 },
  { title: "シュガーソルト", audio: "audio/sumika/chorus/シュガーソルト.mp3", choices: ["シュガーソルト", "Phoenix", "シリウス", "マシロ"], answer: 0, chorusStart: 45 },
  { title: "シリウス", audio: "audio/sumika/chorus/シリウス.mp3", choices: ["シリウス", "Phoenix", "マシロ", "リビドー"], answer: 0, chorusStart: 50 },
  { title: "マシロ", audio: "audio/sumika/chorus/マシロ.mp3", choices: ["マシロ", "Phoenix", "リビドー", "愛染"], answer: 0, chorusStart: 55 },
  { title: "リビドー", audio: "audio/sumika/chorus/リビドー.mp3", choices: ["リビドー", "Phoenix", "愛染", "運命"], answer: 0, chorusStart: 60 },
  { title: "愛染", audio: "audio/sumika/chorus/愛染.mp3", choices: ["愛染", "Phoenix", "運命", "VINCENT"], answer: 0, chorusStart: 45 },
  { title: "運命", audio: "audio/sumika/chorus/運命.mp3", choices: ["運命", "Phoenix", "VINCENT", "シュガーソルト"], answer: 0, chorusStart: 50 },
  // familia
  { title: "Answer", audio: "audio/sumika/familia/Answer.mp3", choices: ["Answer", "Door", "MAGIC", "Someday"], answer: 0, chorusStart: 55 },
  { title: "Door", audio: "audio/sumika/familia/Door.mp3", choices: ["Door", "SummerVacation", "KOKYU", "Lovers"], answer: 0, chorusStart: 48 },
  { title: "KOKYU", audio: "audio/sumika/familia/KOKYU.mp3", choices: ["KOKYU", "MAGIC", "Answer", "Lovers"], answer: 0, chorusStart: 50 },
  { title: "Lovers", audio: "audio/sumika/familia/Lovers.mp3", choices: ["Lovers", "Door", "Someday", "SummerVacation"], answer: 0, chorusStart: 52 },
  { title: "MAGIC", audio: "audio/sumika/familia/MAGIC.mp3", choices: ["MAGIC", "KOKYU", "Answer", "HappyBirthday"], answer: 0, chorusStart: 58 },
  { title: "Someday", audio: "audio/sumika/familia/Someday.mp3", choices: ["Someday", "Lovers", "Door", "SummerVacation"], answer: 0, chorusStart: 60 },
  { title: "SummerVacation", audio: "audio/sumika/familia/SummerVacation.mp3", choices: ["SummerVacation", "MAGIC", "Someday", "Door"], answer: 0, chorusStart: 57 },
  { title: "アイデンティティ", audio: "audio/sumika/familia/アイデンティティ.mp3", choices: ["アイデンティティ", "アネモネ", "春風", "伝言歌"], answer: 0, chorusStart: 62 },
  { title: "アネモネ", audio: "audio/sumika/familia/アネモネ.mp3", choices: ["アネモネ", "アイデンティティ", "ここから見える景色", "まいった"], answer: 0, chorusStart: 54 },
  { title: "ここから見える景色", audio: "audio/sumika/familia/ここから見える景色.mp3", choices: ["ここから見える景色", "ピカソからの宅急便", "春風", "アネモネ"], answer: 0, chorusStart: 59 },
  { title: "ピカソからの宅急便", audio: "audio/sumika/familia/ピカソからの宅急便.mp3", choices: ["ピカソからの宅急便", "まいった", "伝言歌", "ここから見える景色"], answer: 0, chorusStart: 56 },
  { title: "まいった", audio: "audio/sumika/familia/まいった.mp3", choices: ["まいった", "春風", "アネモネ", "アイデンティティ"], answer: 0, chorusStart: 53 },
  { title: "春風", audio: "audio/sumika/familia/春風.mp3", choices: ["春風", "伝言歌", "まいった", "ここから見える景色"], answer: 0, chorusStart: 51 },
  { title: "伝言歌", audio: "audio/sumika/familia/伝言歌.mp3", choices: ["伝言歌", "春風", "アイデンティティ", "ピカソからの宅急便"], answer: 0, chorusStart: 58 },
  // for_
  { title: "Babel", audio: "audio/sumika/for_/Babel.mp3", choices: ["Babel", "Glitter", "ko", "NewWorld"], answer: 0, chorusStart: 60 },
  { title: "Glitter", audio: "audio/sumika/for_/Glitter.mp3", choices: ["Glitter", "Jasmine", "Shake&Shake", "Simple"], answer: 0, chorusStart: 58 },
  { title: "Jasmine", audio: "audio/sumika/for_/Jasmine.mp3", choices: ["Jasmine", "ko", "Porter", "透明"], answer: 0, chorusStart: 55 },
  { title: "ko", audio: "audio/sumika/for_/ko.mp3", choices: ["ko", "LostFound", "言葉と心", "リタルダント"], answer: 0, chorusStart: 52 },
  { title: "LostFound", audio: "audio/sumika/for_/LostFound.mp3", choices: ["LostFound", "NewWorld", "チョコレイト", "何者"], answer: 0, chorusStart: 57 },
  { title: "NewWorld", audio: "audio/sumika/for_/NewWorld.mp3", choices: ["NewWorld", "Porter", "Babel", "Glitter"], answer: 0, chorusStart: 59 },
  { title: "Porter", audio: "audio/sumika/for_/Porter.mp3", choices: ["Porter", "Shake&Shake", "ko", "Jasmine"], answer: 0, chorusStart: 56 },
  { title: "Shake&Shake", audio: "audio/sumika/for_/Shake&Shake.mp3", choices: ["Shake&Shake", "Simple", "Glitter", "Porter"], answer: 0, chorusStart: 54 },
  { title: "Simple", audio: "audio/sumika/for_/Simple.mp3", choices: ["Simple", "Shake&Shake", "NewWorld", "透明"], answer: 0, chorusStart: 53 },
  { title: "チョコレイト", audio: "audio/sumika/for_/チョコレイト.mp3", choices: ["チョコレイト", "フレア", "リタルダント", "言葉と心"], answer: 0, chorusStart: 60 },
  { title: "フレア", audio: "audio/sumika/for_/フレア.mp3", choices: ["フレア", "チョコレイト", "透明", "何者"], answer: 0, chorusStart: 58 },
  { title: "リタルダント", audio: "audio/sumika/for_/リタルダント.mp3", choices: ["リタルダント", "言葉と心", "ko", "フレア"], answer: 0, chorusStart: 55 },
  { title: "何者", audio: "audio/sumika/for_/何者.mp3", choices: ["何者", "透明", "チョコレイト", "LostFound"], answer: 0, chorusStart: 52 },
  { title: "言葉と心", audio: "audio/sumika/for_/言葉と心.mp3", choices: ["言葉と心", "リタルダント", "フレア", "Jasmine"], answer: 0, chorusStart: 57 },
  { title: "透明", audio: "audio/sumika/for_/透明.mp3", choices: ["透明", "何者", "Simple", "言葉と心"], answer: 0, chorusStart: 59 },
  // sally_ep
  { title: "MAGIC", audio: "audio/sumika/sally_ep/MAGIC.mp3", choices: ["MAGIC", "TACTICS", "オレンジ", "まいった"], answer: 0, chorusStart: 58 },
  { title: "TACTICS", audio: "audio/sumika/sally_ep/TACTICS.mp3", choices: ["TACTICS", "MAGIC", "坂道白を告げて", "オレンジ"], answer: 0, chorusStart: 56 },
  { title: "オレンジ", audio: "audio/sumika/sally_ep/オレンジ.mp3", choices: ["オレンジ", "まいった", "TACTICS", "MAGIC"], answer: 0, chorusStart: 54 },
  { title: "まいった", audio: "audio/sumika/sally_ep/まいった.mp3", choices: ["まいった", "坂道白を告げて", "オレンジ", "TACTICS"], answer: 0, chorusStart: 52 },
  { title: "坂道白を告げて", audio: "audio/sumika/sally_ep/坂道白を告げて.mp3", choices: ["坂道白を告げて", "MAGIC", "TACTICS", "まいった"], answer: 0, chorusStart: 60 },
  // // shake_ナイトウォーカー
  { title: "shake_and_shake", audio: "audio/sumika/shake_ナイトウォーカー/shake_and_shake.mp3", choices: ["shake_and_shake", "ナイトウォーカー", "TACTICS", "MAGIC"], answer: 0, chorusStart: 57 },
  { title: "ナイトウォーカー", audio: "audio/sumika/shake_ナイトウォーカー/ナイトウォーカー.mp3", choices: ["ナイトウォーカー", "shake_and_shake", "坂道白を告げて", "オレンジ"], answer: 0, chorusStart: 59 },
  // // unmei_ep
  { title: "PokerJoker", audio: "audio/sumika/unmei_ep/PokerJoker.mp3", choices: ["PokerJoker", "運命", "卒業", "いつかの化物"], answer: 0, chorusStart: 55 },
  { title: "いつかの化物", audio: "audio/sumika/unmei_ep/いつかの化物.mp3", choices: ["いつかの化物", "PokerJoker", "運命", "ナイトウォーカー"], answer: 0, chorusStart: 53 },
  { title: "運命", audio: "audio/sumika/unmei_ep/運命.mp3", choices: ["運命", "卒業", "いつかの化物", "shake_and_shake"], answer: 0, chorusStart: 58 },
  { title: "卒業", audio: "audio/sumika/unmei_ep/卒業.mp3", choices: ["卒業", "運命", "PokerJoker", "TACTICS"], answer: 0, chorusStart: 60 },
  // vermillions
  { title: "DangDingDong", audio: "audio/sumika/vermillions/DangDingDong.mp3", choices: ["DangDingDong", "Phoenix", "HaikaraFlamingo", "Sエス"], answer: 0, chorusStart: 56 },
  { title: "HaikaraFlamingo", audio: "audio/sumika/vermillions/HaikaraFlamingo.mp3", choices: ["HaikaraFlamingo", "シュガーソルト", "LoveLater", "Phoenix"], answer: 0, chorusStart: 58 },
  { title: "LoveLater", audio: "audio/sumika/vermillions/LoveLater.mp3", choices: ["LoveLater", "リビドー", "マシロ", "DangDingDong"], answer: 0, chorusStart: 54 },
  { title: "Phoenix", audio: "audio/sumika/vermillions/Phoenix.mp3", choices: ["Phoenix", "StartingOver", "VINCENT", "HaikaraFlamingo"], answer: 0, chorusStart: 60 },
  { title: "StartingOver", audio: "audio/sumika/vermillions/StartingOver.mp3", choices: ["StartingOver", "Phoenix", "DangDingDong", "Sエス"], answer: 0, chorusStart: 57 },
  { title: "Sエス", audio: "audio/sumika/vermillions/Sエス.mp3", choices: ["Sエス", "シュガーソルト", "Phoenix", "StartingOver"], answer: 0, chorusStart: 52 },
  { title: "Vermillion", audio: "audio/sumika/vermillions/Vermillion.mp3", choices: ["Vermillion", "Phoenix", "HaikaraFlamingo", "StartingOver"], answer: 0, chorusStart: 60 },
  { title: "VINCENT", audio: "audio/sumika/vermillions/VINCENT.mp3", choices: ["VINCENT", "Phoenix", "StartingOver", "DangDingDong"], answer: 0, chorusStart: 59 },
  { title: "シュガーソルト", audio: "audio/sumika/vermillions/シュガーソルト.mp3", choices: ["シュガーソルト", "シリウス", "HaikaraFlamingo", "Sエス"], answer: 0, chorusStart: 55 },
  { title: "シリウス", audio: "audio/sumika/vermillions/シリウス.mp3", choices: ["シリウス", "マシロ", "リビドー", "透明"], answer: 0, chorusStart: 53 },
  { title: "マシロ", audio: "audio/sumika/vermillions/マシロ.mp3", choices: ["マシロ", "リビドー", "シリウス", "愛染"], answer: 0, chorusStart: 51 },
  { title: "リビドー", audio: "audio/sumika/vermillions/リビドー.mp3", choices: ["リビドー", "マシロ", "言葉と心", "シリウス"], answer: 0, chorusStart: 50 },
  { title: "愛染", audio: "audio/sumika/vermillions/愛染.mp3", choices: ["愛染", "運命", "マシロ", "リビドー"], answer: 0, chorusStart: 58 },
  { title: "運命", audio: "audio/sumika/vermillions/運命.mp3", choices: ["運命", "愛染", "Phoenix", "VINCENT"], answer: 0, chorusStart: 60 },
  // アンサーパレード
  { title: "123456", audio: "audio/sumika/アンサーパレード/123456.mp3", choices: ["123456", "enn", "sara", "明日晴れるさ"], answer: 0, chorusStart: 55 },
  { title: "enn", audio: "audio/sumika/アンサーパレード/enn.mp3", choices: ["enn", "Lovers", "伝言歌_AnswerParadeVer", "溶けた体温蕩けた魔法"], answer: 0, chorusStart: 58 },
  { title: "Lovers", audio: "audio/sumika/アンサーパレード/Lovers.mp3", choices: ["Lovers", "enn", "sara", "123456"], answer: 0, chorusStart: 52 },
  { title: "sara", audio: "audio/sumika/アンサーパレード/sara.mp3", choices: ["sara", "明日晴れるさ", "溶けた体温蕩けた魔法", "伝言歌_AnswerParadeVer"], answer: 0, chorusStart: 54 },
  { title: "伝言歌_AnswerParadeVer", audio: "audio/sumika/アンサーパレード/伝言歌_AnswerParadeVer.mp3", choices: ["伝言歌_AnswerParadeVer", "sara", "enn", "Lovers"], answer: 0, chorusStart: 60 },
  { title: "明日晴れるさ", audio: "audio/sumika/アンサーパレード/明日晴れるさ.mp3", choices: ["明日晴れるさ", "123456", "sara", "溶けた体温蕩けた魔法"], answer: 0, chorusStart: 57 },
  { title: "溶けた体温蕩けた魔法", audio: "audio/sumika/アンサーパレード/溶けた体温蕩けた魔法.mp3", choices: ["溶けた体温蕩けた魔法", "伝言歌_AnswerParadeVer", "enn", "明日晴れるさ"], answer: 0, chorusStart: 59 },
  // フィクション
  { title: "いいのに", audio: "audio/sumika/フィクション/いいのに.mp3", choices: ["いいのに", "フィクション", "ペルソナプロムナード", "下弦の月"], answer: 0, chorusStart: 56 },
  { title: "フィクション", audio: "audio/sumika/フィクション/フィクション.mp3", choices: ["フィクション", "いいのに", "下弦の月", "ペルソナプロムナード"], answer: 0, chorusStart: 58 },
  { title: "ペルソナプロムナード", audio: "audio/sumika/フィクション/ペルソナプロムナード.mp3", choices: ["ペルソナプロムナード", "フィクション", "いいのに", "下弦の月"], answer: 0, chorusStart: 54 },
  { title: "下弦の月", audio: "audio/sumika/フィクション/下弦の月.mp3", choices: ["下弦の月", "ペルソナプロムナード", "フィクション", "いいのに"], answer: 0, chorusStart: 52 },
  // 新世界オリハルコン
  { title: "FUN", audio: "audio/sumika/新世界オリハルコン/FUN.mp3", choices: ["FUN", "イナヅマ", "雨天決行", "カルチャーショッカー"], answer: 0, chorusStart: 55 },
  { title: "イナヅマ", audio: "audio/sumika/新世界オリハルコン/イナヅマ.mp3", choices: ["イナヅマ", "FUN", "ほこり", "雨天決行"], answer: 0, chorusStart: 58 },
  { title: "カルチャーショッカー", audio: "audio/sumika/新世界オリハルコン/カルチャーショッカー.mp3", choices: ["カルチャーショッカー", "イナヅマ", "FUN", "ほこり"], answer: 0, chorusStart: 54 },
  { title: "ほこり", audio: "audio/sumika/新世界オリハルコン/ほこり.mp3", choices: ["ほこり", "雨天決行", "FUN", "カルチャーショッカー"], answer: 0, chorusStart: 52 },
  { title: "雨天決行", audio: "audio/sumika/新世界オリハルコン/雨天決行.mp3", choices: ["雨天決行", "ほこり", "イナヅマ", "FUN"], answer: 0, chorusStart: 60 },
  // 本音late_show
  { title: "LateShow", audio: "audio/sumika/本音late_show/LateShow.mp3", choices: ["LateShow", "本音", "VOICE", "twilight"], answer: 0, chorusStart: 57 },
  { title: "本音", audio: "audio/sumika/本音late_show/本音.mp3", choices: ["本音", "LateShow", "123456_Live", "リグレット_Live"], answer: 0, chorusStart: 59 },
  // 本音late_show_bonus
  { title: "123456_Live", audio: "audio/sumika/本音late_show_bonus/123456_Live.mp3", choices: ["123456_Live", "Lovers_Live", "VOICE", "twilight"], answer: 0, chorusStart: 55 },
  { title: "Lovers_Live", audio: "audio/sumika/本音late_show_bonus/Lovers_Live.mp3", choices: ["Lovers_Live", "123456_Live", "リグレット_Live", "本音"], answer: 0, chorusStart: 58 },
  { title: "twilight", audio: "audio/sumika/本音late_show_bonus/twilight.mp3", choices: ["twilight", "VOICE", "晩春風花", "Lovers_Live"], answer: 0, chorusStart: 54 },
  { title: "VOICE", audio: "audio/sumika/本音late_show_bonus/VOICE.mp3", choices: ["VOICE", "twilight", "123456_Live", "リグレット_Live"], answer: 0, chorusStart: 56 },
  { title: "リグレット_Live", audio: "audio/sumika/本音late_show_bonus/リグレット_Live.mp3", choices: ["リグレット_Live", "VOICE", "twilight", "晩春風花"], answer: 0, chorusStart: 52 },
  { title: "伝言歌_Live", audio: "audio/sumika/本音late_show_bonus/伝言歌_Live.mp3", choices: ["伝言歌_Live", "リグレット_Live", "VOICE", "本音"], answer: 0, chorusStart: 60 },
  { title: "憧憬", audio: "audio/sumika/本音late_show_bonus/憧憬.mp3", choices: ["憧憬", "twilight", "VOICE", "伝言歌_Live"], answer: 0, chorusStart: 54 },
  { title: "晩春風花", audio: "audio/sumika/本音late_show_bonus/晩春風花.mp3", choices: ["晩春風花", "twilight", "VOICE", "伝言歌_Live"], answer: 0, chorusStart: 53 },


];



// === 効果音 ===
const effects = {
  correct: new Audio("audio/effects/correct.mp3"),
  wrong: new Audio("audio/effects/wrong.mp3"),
  buzz1P: new Audio("audio/effects/オウ.mp3"),
  buzz2P: new Audio("audio/effects/ボン.mp3"),
  win: new Audio("audio/effects/win.mp3"),
  draw: new Audio("audio/effects/draw.mp3"),
  anime: new Audio("audio/effects/anime.mp3"), // アニメ的な効果音（ROUND演出等）
};

// === 背景（瞬断防止）===
const bgFiles = ["images/photo1.jpg", "images/photo2.jpg", "videos/videos (1).mp4", "videos/videos (2).mp4"];
const bgContainer = document.getElementById("background-container");

function setRandomBackground() {
  const random = bgFiles[Math.floor(Math.random() * bgFiles.length)];
  const existing = bgContainer.firstElementChild;
  if (existing) {
    if (random.endsWith(".mp4") && existing.tagName === "VIDEO") {
      if (!existing.src.endsWith(random)) existing.src = random;
      return;
    }
    if (!random.endsWith(".mp4") && existing.tagName === "IMG") {
      if (!existing.src.endsWith(random)) existing.src = random;
      return;
    }
  }
  bgContainer.innerHTML = "";
  if (random.endsWith(".mp4")) {
    const video = document.createElement("video");
    Object.assign(video, {
      src: random, autoplay: true, loop: true, muted: true, playsInline: true
    });
    Object.assign(video.style, { width: "100%", height: "100%", objectFit: "cover" });
    bgContainer.appendChild(video);
  } else {
    const img = document.createElement("img");
    Object.assign(img.style, { width: "100%", height: "100%", objectFit: "cover" });
    img.src = random;
    bgContainer.appendChild(img);
  }
}

// === DOM取得 ===
const setupArea = document.getElementById("setup-area");
const gameArea = document.getElementById("game-area");
const resultArea = document.getElementById("result-area");
const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const quizAudio = document.getElementById("quizAudio");
const roundInfo = document.getElementById("round-info");
const statusText = document.getElementById("status-text");
const choicesDiv = document.getElementById("choices");
const resultDisplay = document.getElementById("result-display");
const finalMessage = document.getElementById("final-message");
const animationLayer = document.getElementById("animation-layer");
const buzz1P = document.getElementById("buzz1P");
const buzz2P = document.getElementById("buzz2P");
const score1PElem = document.getElementById("score1P");
const score2PElem = document.getElementById("score2P");
const scoreboard = document.getElementById("scoreboard");
// === キー設定 ===
const keyMap1P = { A: 0, W: 1, D: 2, Z: 3 };
const keyMap2P = { "4": 0, "8": 1, "6": 2, "2": 3 };

// ✅ 追加：表示用のキーラベル（順番に対応）
const keyLabels1P = ["A", "W", "D", "Z"];
const keyLabels2P = ["4", "8", "6", "2"];



// === 状態 ===
let selectedSongs = [];
let currentRound = 1;
let totalRounds = 1;
let songPerRound = 1;
let currentIndex = 0;
let score1P = 0, score2P = 0;
let activePlayer = null;
let answered = false;
let chorusTimeout = null;
let answerTimeout = null;
let passCount = 0;
let isLastQuestion = false;
// === グローバル変数 ===
let currentChoices = []; // ← 追加：この問題のシャッフル済み選択肢を保存
let currentAnswerIndex = 0;
let countdownInterval;




// === 問題開始 ===
function nextQuestion() {
  if (quizIndex >= allSongs.length) return showFinalResult();

  clearScreen();
  const song = allSongs[quizIndex];
  roundDisplay.textContent = `ROUND ${quizIndex + 1}`;
  message.textContent = `🎵 ${playerTurn}P のターン！`;

  // ✅ 選択肢シャッフル
  currentChoices = [...song.choices].sort(() => Math.random() - 0.5);

  // ✅ この問題の「正解が今どの位置にあるか」を特定
  const correctAnswer = song.choices[song.answer];
  currentAnswerIndex = currentChoices.indexOf(correctAnswer); // ← 追加！

  
  // 表示
 choicesArea.innerHTML = "";
currentChoices.forEach((choice, i) => {
  const btn = document.createElement("button");
  btn.className = "choice-btn";

  // ✅ キーラベルを取得
  const keyLabel = player === 1 ? keyLabels1P[i] : keyLabels2P[i];

  // ✅ 表示形式を変更：「1P(A) 春夏秋冬」
  btn.textContent = `${player}P(${keyLabel}) ${choice}`;

  // ✅ 見た目の強調（任意）
  btn.style.border = player === 1 ? "3px solid #00f" : "3px solid #f00";
  btn.style.backgroundColor = "#222";
  btn.style.color = "#fff";
  btn.style.fontSize = "1.5rem";
  btn.style.padding = "15px 25px";
  btn.style.margin = "10px";

  btn.onclick = () => handleAnswer(player, choice, correctAnswer);
  choicesDiv.appendChild(btn);
});





  // 曲再生
  audio = new Audio(song.audio);
  audio.currentTime = song.chorusStart;
  audio.play();
  canAnswer = true;

  // 5秒後に自動で次へ
  timer = setTimeout(() => {
    canAnswer = false;
    message.textContent = "⏰ 時間切れ！";
    se_wrong.play();
    switchTurn();
  }, 5000);
}


// === 回答チェック ===
function checkAnswer(choiceIndex) {
  canAnswer = false;
  clearTimeout(timer);

  const isCorrect = choiceIndex === currentAnswerIndex; // ✅ ← 正解位置を比較

  if (isCorrect) {
    se_correct.play();
    showFireworks();
    message.textContent = `🎯 ${playerTurn}P 正解！`;
    scores[playerTurn] += 1;
    setTimeout(() => {
      quizIndex++;
      nextRound();
    }, 3000);
  } else {
    se_wrong.play();
    message.textContent = `❌ ${playerTurn}P 不正解！`;
    setTimeout(() => {
      switchTurn();
    }, 2000);
  }
}



// === スタート ===
startBtn.addEventListener("click", () => {
  const roundCount = Number(document.getElementById("roundCount").value);
  const songCount = Number(document.getElementById("songCount").value);

  // ラウンド数・曲数表示用オーバーレイ
  const overlay = document.createElement("div");
  overlay.className = "start-overlay";
  overlay.innerHTML = `<div style="font-size:4rem; color:#fff; font-weight:bold; text-align:center;">
                          ROUND: ${roundCount} <br> 曲数: ${songCount}
                       </div>`;
  Object.assign(overlay.style, {
    position: "fixed", top: "50%", left: "50%",
    transform: "translate(-50%,-50%) scale(0.6)",
    background: "rgba(0,0,0,0.7)", padding: "2rem 3rem",
    borderRadius: "1rem", textShadow: "0 0 15px #ff0",
    zIndex: "9999", opacity: "0", transition: "all 600ms ease"
  });
  document.body.appendChild(overlay);

  setTimeout(() => { overlay.style.opacity = "1"; overlay.style.transform = "translate(-50%,-50%) scale(1)"; }, 50);
  setTimeout(() => { overlay.style.opacity = "0"; overlay.style.transform = "translate(-50%,-50%) scale(0.7)"; }, 1800);
  setTimeout(() => overlay.remove(), 2500);

  // 背景設定とゲーム開始
  setRandomBackground();
  totalRounds = roundCount;
  songPerRound = songCount;
  selectedSongs = allSongs.sort(() => Math.random() - 0.5).slice(0, songPerRound * totalRounds);
  setupArea.classList.add("hidden");
  gameArea.classList.remove("hidden");
  currentIndex = 0;
  score1P = 0; score2P = 0;
  startQuestion();
});

function showCorrect() {
  resultDisplay.textContent = "🎉 正解！";
  resultDisplay.className = "correct";
}

function showIncorrect() {
  resultDisplay.textContent = "❌ 不正解！";
  resultDisplay.className = "incorrect";
}


// === 問題開始 ===
function startQuestion() {
  clearTimeout(chorusTimeout);
  clearTimeout(answerTimeout);
  answered = false;
  activePlayer = null;
  passCount = 0;
  setRandomBackground();

  // ← ここで前の4択を消す
  choicesDiv.classList.add("hidden");
  choicesDiv.innerHTML = "";  // これを追加

  if (currentIndex >= selectedSongs.length) return showFinalResult();

  const thisRound = Math.ceil((currentIndex + 1) / songPerRound);
  if (thisRound !== currentRound) {
    currentRound = thisRound;
    showRoundTransition(currentRound);
  }

  roundInfo.textContent = `ROUND ${thisRound}`;
  isLastQuestion = (currentIndex === selectedSongs.length - 1);
  updateNextButtonForQuestion();

  statusText.textContent = "🎵 早押しスタンバイ！";
  resultDisplay.innerHTML = "";
  nextBtn.classList.add("hidden");
  buzz1P.disabled = false;
  buzz2P.disabled = false;

  const song = selectedSongs[currentIndex];
  quizAudio.src = song.audio;
  quizAudio.currentTime = 0;
  quizAudio.play();
}


// === ROUND演出 ===
function showRoundTransition(round) {
  const overlay = document.createElement("div");
  overlay.className = "round-overlay";
  overlay.innerHTML = `<span style="font-size:4rem;">🔥 ROUND ${round} 🔥</span>`;
  Object.assign(overlay.style, {
    position: "fixed", top: "50%", left: "50%",
    transform: "translate(-50%, -50%) scale(0.6)",
    fontWeight: "bold", color: "#fff",
    background: "rgba(0,0,0,0.7)", padding: "1.5rem 3rem",
    borderRadius: "1rem", textShadow: "0 0 15px #ff0",
    opacity: "0", transition: "all 600ms ease", zIndex: "9999"
  });
  document.body.appendChild(overlay);
  effects.anime.currentTime = 0;
  effects.anime.play();
  setTimeout(() => {
    overlay.style.opacity = "1";
    overlay.style.transform = "translate(-50%, -50%) scale(1)";
  }, 100);
  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.transform = "translate(-50%, -50%) scale(0.7)";
  }, 1600);
  setTimeout(() => overlay.remove(), 2200);
}

function updateStatus(player) {
  if (player === 1) {
    statusText.innerHTML = `<span style="color:#00f; font-weight:bold; font-size:1.5rem;">🎵 1P 解答中！</span>`;
  } else if (player === 2) {
    statusText.innerHTML = `<span style="color:#f00; font-weight:bold; font-size:1.5rem;">🎵 2P 解答中！</span>`;
  } else {
    statusText.textContent = "🎵 早押しスタンバイ！";
  }
}


// === 早押し ===
buzz1P.onclick = () => handleBuzz(1);
buzz2P.onclick = () => handleBuzz(2);

function handleBuzz(player) {
  if (activePlayer || answered) return;
  activePlayer = player;
  quizAudio.pause();
  (player === 1 ? effects.buzz1P : effects.buzz2P).play();
  statusText.innerHTML = `<span class="highlight">${player}P 解答中！</span>`;
  buzz1P.disabled = true;
  buzz2P.disabled = true;
  showChoicesForPlayer(player);
}


// === 選択肢 ===
function showChoicesForPlayer(player) {
  const song = selectedSongs[currentIndex];

  // ✅ 問題ごとにランダムな4択を生成（最初に1回だけ）
  if (!song._shuffled) {
    song._shuffled = true;
    song._choices = [...song.choices].sort(() => Math.random() - 0.5);
    song._correctAnswer = song.choices[song.answer]; // 本当の正解文字列
  }

  const currentChoices = song._choices;
  const correctAnswer = song._correctAnswer;

  choicesDiv.innerHTML = "";
  choicesDiv.classList.remove("hidden");

  currentChoices.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";

    // ✅ キーラベルを取得（1P or 2P）
    const keyLabel = player === 1 ? keyLabels1P[i] : keyLabels2P[i];

    // ✅ 表示形式：「春夏秋冬 (A)」
    btn.textContent = `${choice} (${keyLabel})`;

    // ✅ スタイル
    btn.style.border = player === 1 ? "3px solid #00f" : "3px solid #f00";
    btn.style.backgroundColor = "#222";
    btn.style.color = "#fff";
    btn.style.fontSize = "1.5rem";
    btn.style.padding = "15px 25px";
    btn.style.margin = "10px";
    btn.style.borderRadius = "1rem";
    btn.style.textShadow = "0 0 10px #000";

    btn.onclick = () => handleAnswer(player, choice, correctAnswer);
    choicesDiv.appendChild(btn);
  });

  // ✅ タイマーセット
  answerTimeout = setTimeout(() => handleTimeUp(player), 5000);
  startCountdown(player, 5);
  updateStatus(player);
}


function startCountdown(player, seconds) {
  clearTimeout(answerTimeout);
  clearInterval(countdownInterval);

  const timerDisplay = document.getElementById("timer-display");
  const timerBar = document.getElementById("timer-bar");
  const timerFill = document.getElementById("timer-fill");

  timerDisplay.textContent = seconds;
  timerDisplay.style.display = "block";
  timerBar.style.display = "block";
  timerFill.style.width = "100%";

  let timeLeft = seconds;

  countdownInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    const percent = (timeLeft / seconds) * 100;
    timerFill.style.width = `${percent}%`;

    if (timeLeft <= 2) {
      timerDisplay.style.color = "#f00";
      timerDisplay.style.textShadow = "0 0 30px #f00, 0 0 60px #ff0";
      timerDisplay.style.transform = "scale(1.5)";
    } else {
      timerDisplay.style.color = "#ff0";
      timerDisplay.style.textShadow = "0 0 20px #f00, 0 0 40px #ff0";
      timerDisplay.style.transform = "scale(1)";
    }

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      timerDisplay.style.display = "none";
      timerBar.style.display = "none";
      triggerExplosionEffect();
      handleTimeUp(player);
    }
  }, 1000);

  answerTimeout = setTimeout(() => {
    timerDisplay.style.display = "none";
    timerBar.style.display = "none";
    triggerExplosionEffect();
    handleTimeUp(player);
  }, seconds * 1000);
}
function triggerExplosionEffect() {
  // 💥 爆発粒子
  const layer = document.createElement("div");
  Object.assign(layer.style, {
    position: "fixed", left: 0, top: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "9998"
  });
  document.body.appendChild(layer);

  const colors = ["#ff3", "#f33", "#f93", "#fff"];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    const s = 10 + Math.random() * 20;
    Object.assign(p.style, {
      width: `${s}px`, height: `${s}px`, borderRadius: "50%",
      position: "absolute",
      left: `${50 + (Math.random() - 0.5) * 40}%`,
      top: `${50 + (Math.random() - 0.5) * 40}%`,
      background: colors[Math.floor(Math.random() * colors.length)],
      opacity: "0.9",
      transform: "translate(-50%,-50%) scale(0.2)",
      transition: "transform 900ms, opacity 1000ms"
    });
    layer.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translate(-50%,-50%) scale(1.5) translate(${(Math.random()-0.5)*400}px, ${(Math.random()-0.5)*400}px)`;
      p.style.opacity = "0";
    });
  }
  setTimeout(() => layer.remove(), 1200);



  // ⚡ 画面フラッシュ
  const flash = document.createElement("div");
  flash.className = "flash-overlay";
  document.body.appendChild(flash);
  requestAnimationFrame(() => {
    flash.style.opacity = "1";
    setTimeout(() => {
      flash.style.opacity = "0";
      setTimeout(() => flash.remove(), 300);
    }, 100);
  });
}

  function triggerLightningEffect() {
  const flash = document.createElement("div");
  Object.assign(flash.style, {
    position: "fixed", top: 0, left: 0,
    width: "100%", height: "100%",
    background: "rgba(255,255,255,0.8)",
    zIndex: "9999", pointerEvents: "none",
    transition: "opacity 0.2s ease"
  });
  document.body.appendChild(flash);

  flash.style.opacity = "1";
  setTimeout(() => {
    flash.style.opacity = "0";
    setTimeout(() => flash.remove(), 200);
  }, 100);
}

function handleTimeUp(player) {
  if (answered) return;

  // タイマー停止
  clearTimeout(answerTimeout);
  clearInterval(countdownInterval);
  document.getElementById("timer-display").style.display = "none";
  document.getElementById("timer-bar").style.display = "none";

  effects.wrong.play();
  showBigEffect(`⌛ ${player}P 時間切れ！`, "#ccc");
  triggerExplosionEffect();

  choicesDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);

  passCount++;

  if (passCount >= 2) {
    answered = true;
    const correct = selectedSongs[currentIndex]._correctAnswer;
    resultDisplay.innerHTML = `正解は「${correct}」でした！`;
    setTimeout(() => goToChorus(false), 1000);
  } else {
    activePlayer = (player === 1 ? 2 : 1);
    answered = false; // 🔧 次のプレイヤーに渡すので false に戻す
    setTimeout(() => showTransferEffect(`${activePlayer}P に回答権が移りました！`), 700);
    setTimeout(() => showChoicesForPlayer(activePlayer), 1300);
  }
}



// === 回答 ===
function handleAnswer(player, selectedChoice, correctAnswer) {
  if (answered || player !== activePlayer) return;
  clearTimeout(answerTimeout);

  const song = selectedSongs[currentIndex];
  const correct = selectedChoice === correctAnswer;
  choicesDiv.querySelectorAll("button").forEach(btn => btn.disabled = true);
   // 🔧 タイマー停止
  clearTimeout(answerTimeout);
  clearInterval(countdownInterval);
  document.getElementById("timer-display").style.display = "none";



  if (correct) {
    // ✅ 正解
    answered = true;
    effects.correct.play();
    showBigEffect(`🎉 ${player}P 正解！ 答え: ${correctAnswer}`, "#ff6");
    triggerFireworks();

    if (player === 1) score1P++;
    else score2P++;

    goToChorus(true);

  } else {
    // ❌ 不正解（正解はまだ表示しない）
    effects.wrong.play();
    showBigEffect(`❌ ${player}P 不正解！`, "#f66");
    triggerLightningEffect(); // ⚡ 雷演出


    passCount++;

    if (passCount >= 2) {
      // 両者とも間違い
      answered = true;
      resultDisplay.innerHTML = `正解は「${correctAnswer}」でした！`;
      setTimeout(() => goToChorus(false), 1000);
      return;
    }

    // 回答権を相手に移す
    activePlayer = (player === 1 ? 2 : 1);
    setTimeout(() => {
      showTransferEffect(`${activePlayer}P に回答権が移りました！`);
    }, 700);

    setTimeout(() => showChoicesForPlayer(activePlayer), 1300);
  }
}




// === 回答権移動エフェクト ===
function showTransferEffect(text) {
  const msg = document.createElement("div");
  msg.textContent = text;
  Object.assign(msg.style, {
    position: "fixed", top: "45%", left: "50%",
    transform: "translate(-50%,-50%) scale(0.8)",
    background: "rgba(0,0,0,0.6)", color: "#fff",
    fontSize: "2rem", padding: "1rem 2rem",
    borderRadius: "1rem", textShadow: "0 0 15px #0ff",
    transition: "all 700ms ease", zIndex: "9999", opacity: "0"
  });
  document.body.appendChild(msg);
  setTimeout(() => { msg.style.opacity = "1"; msg.style.transform = "translate(-50%,-50%) scale(1)"; }, 50);
  setTimeout(() => { msg.style.opacity = "0"; msg.style.transform = "translate(-50%,-50%) scale(0.7)"; }, 1200);
  setTimeout(() => msg.remove(), 2000);
}

// === 大きなテキスト演出 ===
function showBigEffect(text, color) {
  const elem = document.createElement("div");
  elem.innerHTML = text;
  Object.assign(elem.style, {
    position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%) scale(0.5) rotate(0deg)",
    color, fontSize: "5rem", fontWeight: "bold", textShadow: "0 0 30px #000",
    zIndex: "9999", opacity: "0", transition: "all 0.8s ease"
  });
  document.body.appendChild(elem);

  // アニメーション
  setTimeout(() => { 
    elem.style.opacity = "1"; 
    elem.style.transform = "translate(-50%,-50%) scale(1.3) rotate(10deg)"; 
  }, 50);
  setTimeout(() => { 
    elem.style.transform = "translate(-50%,-50%) scale(1) rotate(-10deg)"; 
  }, 400);
  setTimeout(() => { 
    elem.style.opacity = "0"; 
    elem.style.transform = "translate(-50%,-50%) scale(0.6) rotate(0deg)"; 
  }, 1200);

  setTimeout(() => elem.remove(), 1800);
}


// === サビ ===
function goToChorus() {
  const song = selectedSongs[currentIndex];
  choicesDiv.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  quizAudio.currentTime = song.chorusStart;
  quizAudio.play();
  clearTimeout(chorusTimeout);
  chorusTimeout = setTimeout(() => {
    if (isLastQuestion) showFinalResult();
    else goNext();
  }, 5000);
}

// === 花火 ===
function triggerFireworks() {
  const c = document.createElement("div");
  Object.assign(c.style, {
    position: "fixed", left: 0, top: 0, width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "9998"
  });
  animationLayer.appendChild(c);
  const colors = ["#ff3", "#f3f", "#3ff", "#f66", "#6f6"];
  for (let i = 0; i < 35; i++) {
    const p = document.createElement("div");
    const s = 8 + Math.random() * 12;
    Object.assign(p.style, {
      width: `${s}px`, height: `${s}px`, borderRadius: "50%",
      position: "absolute", left: `${50 + (Math.random() - 0.5) * 40}%`,
      top: `${40 + (Math.random() - 0.5) * 40}%`,
      background: colors[Math.floor(Math.random() * colors.length)],
      opacity: "0.95", transform: "translate(-50%,-50%) scale(0.2)",
      transition: "transform 900ms, opacity 1000ms"
    });
    c.appendChild(p);
    requestAnimationFrame(() => {
      p.style.transform = `translate(-50%,-50%) scale(1.5) translate(${(Math.random()-0.5)*400}px, ${(Math.random()-0.5)*400}px)`;
      p.style.opacity = "0";
    });
  }
  setTimeout(() => c.remove(), 1200);

   const flash = document.createElement("div");
  Object.assign(flash.style, {
    position: "fixed", top: 0, left: 0,
    width: "100%", height: "100%",
    background: "rgba(255,255,255,0.8)",
    zIndex: "9999", pointerEvents: "none",
    transition: "opacity 0.2s ease"
  });
  document.body.appendChild(flash);

  flash.style.opacity = "1";
  setTimeout(() => {
    flash.style.opacity = "0";
    setTimeout(() => flash.remove(), 200);
  }, 100);


}

// === 次へ ===
function updateNextButtonForQuestion() {
  nextBtn.textContent = isLastQuestion ? "結果発表 ▶" : "次へ ▶";
  nextBtn.onclick = isLastQuestion ? showFinalResult : goNext;
}

function goNext() {
  quizAudio.pause();
  currentIndex++;

  choicesDiv.classList.add("hidden");
  choicesDiv.innerHTML = "";
  resultDisplay.innerHTML = "";

  buzz1P.disabled = false;
  buzz2P.disabled = false;

  activePlayer = null;
  answered = false;
  passCount = 0;

  clearTimeout(answerTimeout);
  clearInterval(countdownInterval);
  document.getElementById("timer-display").style.display = "none";
  document.getElementById("timer-bar").style.display = "none";

  startQuestion();
}


// === 結果 ===
function showFinalResult() {
  clearTimeout(chorusTimeout);
  clearTimeout(answerTimeout);
  quizAudio.pause();
  gameArea.classList.add("hidden");
  resultArea.classList.remove("hidden");

  // 結果タイトル
  showBigEffect("🎬 結果発表！", "#0ff");

  // スコアを大きく表示
  setTimeout(() => {
    const scoreOverlay = document.createElement("div");
    scoreOverlay.innerHTML = `
      <div style="font-size:6rem; color:#ff0; text-align:center;">
        1P: ${score1P} <br> 2P: ${score2P}
      </div>`;
    Object.assign(scoreOverlay.style, {
      position: "fixed", top: "50%", left: "50%",
      transform: "translate(-50%,-50%) scale(0.5)",
      zIndex: "9999", opacity: "0", transition: "all 1s ease"
    });
    document.body.appendChild(scoreOverlay);

    setTimeout(() => { scoreOverlay.style.opacity = "1"; scoreOverlay.style.transform = "translate(-50%,-50%) scale(1.2) rotate(-5deg)"; }, 50);
    setTimeout(() => { scoreOverlay.style.transform = "translate(-50%,-50%) scale(1) rotate(5deg)"; }, 800);
    setTimeout(() => { scoreOverlay.style.opacity = "0"; scoreOverlay.style.transform = "translate(-50%,-50%) scale(0.7) rotate(0deg)"; }, 2000);
    setTimeout(() => scoreOverlay.remove(), 2500);
  }, 500);

  // 勝者表示
  setTimeout(() => {
    if (score1P > score2P) {
      effects.win.play();
      showBigEffect("🏆 1Pの勝利！", "#ff9");
    } else if (score2P > score1P) {
      effects.win.play();
      showBigEffect("🏆 2Pの勝利！", "#9ff");
    } else {
      effects.draw.play();
      showBigEffect("🤝 引き分け！", "#fff");
    }
  }, 1500);
}

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  if (key === "S") {
    document.getElementById("buzz1P").click(); // 1P早押しボタンを押したことにする
  } else if (key === "5") {
    document.getElementById("buzz2P").click(); // 2P早押しボタンを押したことにする
  }
    if (e.key === "Enter") {
    // 「次へ」ボタンが表示されていて押せる状態ならクリック
    if (!nextBtn.classList.contains("hidden") && !nextBtn.disabled) {
      nextBtn.click();
    }
 }
document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();

  // 早押しキー
  if (key === "S") buzz1P.click();
  else if (key === "5") buzz2P.click();

  // 次へキー（スペース）
  else if (e.code === "Space") {
    if (!nextBtn.classList.contains("hidden") && !nextBtn.disabled) {
      nextBtn.click();
    }
  }

  // 1Pの選択キー
  else if (activePlayer === 1 && keyMap1P.hasOwnProperty(key)) {
    const index = keyMap1P[key];
    const song = selectedSongs[currentIndex];
    const correctAnswer = song._correctAnswer;
    const selectedChoice = song._choices[index];
    handleAnswer(1, selectedChoice, correctAnswer);
  }

  // 2Pの選択キー
  else if (activePlayer === 2 && keyMap2P.hasOwnProperty(key)) {
    const index = keyMap2P[key];
    const song = selectedSongs[currentIndex];
    const correctAnswer = song._correctAnswer;
    const selectedChoice = song._choices[index];
    handleAnswer(2, selectedChoice, correctAnswer);
  }
});


});





restartBtn.onclick = () => location.reload();
