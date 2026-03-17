
const vocabulary = [
  {"chinese": "你好", "pinyin": "nǐ hǎo", "english": "hello", "level": 1, "type": "phrase", "sentence": "你好，认识你很高兴！", "sentencePy": "Nǐ hǎo, rènshi nǐ hěn gāoxìng!", "sentenceEn": "Hello, nice to meet you!"},
  {"chinese": "谢谢", "pinyin": "xièxie", "english": "thank you", "level": 1, "type": "phrase", "sentence": "谢谢你的帮助！", "sentencePy": "Xièxie nǐ de bāngzhù!", "sentenceEn": "Thank you for your help!"},
  {"chinese": "再见", "pinyin": "zàijiàn", "english": "goodbye", "level": 1, "type": "phrase", "sentence": "明天见！再见！", "sentencePy": "Míngtiān jiàn! Zàijiàn!", "sentenceEn": "See you tomorrow! Goodbye!"},
  {"chinese": "对不起", "pinyin": "duìbùqǐ", "english": "sorry", "level": 1, "type": "phrase", "sentence": "对不起，我来晚了。", "sentencePy": "Duìbùqǐ, wǒ lái wǎn le.", "sentenceEn": "Sorry, I'm late."},
  {"chinese": "不客气", "pinyin": "búkèqì", "english": "you're welcome", "level": 1, "type": "phrase"},
  {"chinese": "没关系", "pinyin": "méi guānxì", "english": "it doesn't matter", "level": 1, "type": "phrase"},
  {"chinese": "大", "pinyin": "dà", "english": "big", "level": 1, "type": "adj", "sentence": "这个苹果很大。", "sentencePy": "Zhège píngguǒ hěn dà.", "sentenceEn": "This apple is very big."},
  {"chinese": "小", "pinyin": "xiǎo", "english": "small", "level": 1, "type": "adj", "sentence": "我的猫很小。", "sentencePy": "Wǒ de māo hěn xiǎo.", "sentenceEn": "My cat is very small."},
  {"chinese": "多", "pinyin": "duō", "english": "many", "level": 1, "type": "adj"},
  {"chinese": "少", "pinyin": "shǎo", "english": "few", "level": 1, "type": "adj"},
  {"chinese": "好", "pinyin": "hǎo", "english": "good", "level": 1, "type": "adj", "sentence": "今天天气很好。", "sentencePy": "Jīntiān tiānqì hěn hǎo.", "sentenceEn": "The weather is very good today."},
  {"chinese": "高兴", "pinyin": "gāoxìng", "english": "happy", "level": 1, "type": "adj", "sentence": "我很高兴认识你。", "sentencePy": "Wǒ hěn gāoxìng rènshi nǐ.", "sentenceEn": "I am happy to meet you."},
  {"chinese": "冷", "pinyin": "lěng", "english": "cold", "level": 1, "type": "adj"},
  {"chinese": "热", "pinyin": "rè", "english": "hot", "level": 1, "type": "adj"},
  {"chinese": "漂亮", "pinyin": "piàoliang", "english": "pretty", "level": 1, "type": "adj"},
  {"chinese": "不", "pinyin": "bù", "english": "no, not", "level": 1, "type": "adv"},
  {"chinese": "没有", "pinyin": "méiyǒu", "english": "not have, did not", "level": 1, "type": "v"},
  {"chinese": "很", "pinyin": "hěn", "english": "very", "level": 1, "type": "adv"},
  {"chinese": "太", "pinyin": "tài", "english": "too", "level": 1, "type": "adv"},
  {"chinese": "都", "pinyin": "dōu", "english": "all", "level": 1, "type": "adv"},
  {"chinese": "会", "pinyin": "huì", "english": "can, know how to", "level": 1, "type": "v"},
  {"chinese": "能", "pinyin": "néng", "english": "can, be able to", "level": 1, "type": "v"},
  {"chinese": "想", "pinyin": "xiǎng", "english": "would like to", "level": 1, "type": "v"},
  {"chinese": "和", "pinyin": "hé", "english": "and", "level": 1, "type": "conj"},
  {"chinese": "这", "pinyin": "zhè", "english": "this", "level": 1, "type": "pron"},
  {"chinese": "那", "pinyin": "nà", "english": "that", "level": 1, "type": "pron"},
  {"chinese": "喂", "pinyin": "wèi", "english": "hey, hello", "level": 1, "type": "interj"},
  {"chinese": "多少", "pinyin": "duōshao", "english": "how much", "level": 1, "type": "ques"},
  {"chinese": "几", "pinyin": "jǐ", "english": "how many, a few", "level": 1, "type": "num"},
  {"chinese": "哪", "pinyin": "nǎ", "english": "which", "level": 1, "type": "ques"},
  {"chinese": "哪儿", "pinyin": "nǎr", "english": "where", "level": 1, "type": "ques"},
  {"chinese": "什么", "pinyin": "shénme", "english": "what", "level": 1, "type": "ques"},
  {"chinese": "谁", "pinyin": "shéi", "english": "who", "level": 1, "type": "ques"},
  {"chinese": "怎么", "pinyin": "zěnme", "english": "how", "level": 1, "type": "ques"},
  {"chinese": "怎么样", "pinyin": "zěnmeyàng", "english": "how about", "level": 1, "type": "ques"},
  {"chinese": "本", "pinyin": "běn", "english": "[measure word for books]", "level": 1, "type": "mw"},
  {"chinese": "个", "pinyin": "gè", "english": "[measure word for people]", "level": 1, "type": "mw"},
  {"chinese": "块", "pinyin": "kuài", "english": "[measure word for pieces]", "level": 1, "type": "mw"},
  {"chinese": "岁", "pinyin": "suì", "english": "years old", "level": 1, "type": "mw"},
  {"chinese": "些", "pinyin": "xiē", "english": "some", "level": 1, "type": "part"},
  {"chinese": "一点儿", "pinyin": "yīdiǎnr", "english": "a little", "level": 1, "type": "part"},
  {"chinese": "爸爸", "pinyin": "bàba", "english": "dad", "level": 1, "type": "n"},
  {"chinese": "妈妈", "pinyin": "māma", "english": "mom", "level": 1, "type": "n"},
  {"chinese": "北京", "pinyin": "Běijīng", "english": "Beijing", "level": 1, "type": "n"},
  {"chinese": "杯子", "pinyin": "bēizi", "english": "cup", "level": 1, "type": "n"},
  {"chinese": "菜", "pinyin": "cài", "english": "vegetable", "level": 1, "type": "n"},
  {"chinese": "茶", "pinyin": "chá", "english": "tea", "level": 1, "type": "n"},
  {"chinese": "出租车", "pinyin": "chūzūchē", "english": "taxi", "level": 1, "type": "n"},
  {"chinese": "点", "pinyin": "diǎn", "english": "point, dot", "level": 1, "type": "n"},
  {"chinese": "电视", "pinyin": "diànshì", "english": "television", "level": 1, "type": "n"},
  {"chinese": "电影", "pinyin": "diànyǐng", "english": "movie", "level": 1, "type": "n"},
  {"chinese": "东西", "pinyin": "dōngxi", "english": "thing", "level": 1, "type": "n"},
  {"chinese": "儿子", "pinyin": "érzi", "english": "son", "level": 1, "type": "n"},
  {"chinese": "饭店", "pinyin": "fàndiàn", "english": "restaurant", "level": 1, "type": "n"},
  {"chinese": "飞机", "pinyin": "fēijī", "english": "airplane", "level": 1, "type": "n"},
  {"chinese": "分钟", "pinyin": "fēnzhōng", "english": "minute", "level": 1, "type": "n"},
  {"chinese": "狗", "pinyin": "gǒu", "english": "dog", "level": 1, "type": "n"},
  {"chinese": "汉语", "pinyin": "Hànyǔ", "english": "Mandarin Chinese", "level": 1, "type": "n"},
  {"chinese": "后面", "pinyin": "hòumiàn", "english": "behind", "level": 1, "type": "n"},
  {"chinese": "家", "pinyin": "jiā", "english": "home", "level": 1, "type": "n", "sentence": "我家在北京。", "sentencePy": "Wǒ jiā zài Běijīng.", "sentenceEn": "My home is in Beijing."},
  {"chinese": "今天", "pinyin": "jīntiān", "english": "today", "level": 1, "type": "n", "sentence": "今天是星期三。", "sentencePy": "Jīntiān shì xīngqīsān.", "sentenceEn": "Today is Wednesday."},
  {"chinese": "老师", "pinyin": "lǎoshī", "english": "teacher", "level": 1, "type": "n", "sentence": "我的老师很好。", "sentencePy": "Wǒ de lǎoshī hěn hǎo.", "sentenceEn": "My teacher is very good."},
  {"chinese": "里面", "pinyin": "lǐmiàn", "english": "inside", "level": 1, "type": "n"},
  {"chinese": "猫", "pinyin": "māo", "english": "cat", "level": 1, "type": "n"},
  {"chinese": "米饭", "pinyin": "mǐfàn", "english": "rice", "level": 1, "type": "n"},
  {"chinese": "明天", "pinyin": "míngtiān", "english": "tomorrow", "level": 1, "type": "n"},
  {"chinese": "名字", "pinyin": "míngzi", "english": "name", "level": 1, "type": "n"},
  {"chinese": "年", "pinyin": "nián", "english": "year", "level": 1, "type": "n"},
  {"chinese": "女儿", "pinyin": "nǚ'ér", "english": "daughter", "level": 1, "type": "n"},
  {"chinese": "苹果", "pinyin": "píngguǒ", "english": "apple", "level": 1, "type": "n"},
  {"chinese": "钱", "pinyin": "qián", "english": "money", "level": 1, "type": "n"},
  {"chinese": "前面", "pinyin": "qiánmiàn", "english": "front", "level": 1, "type": "n"},
  {"chinese": "人", "pinyin": "rén", "english": "person", "level": 1, "type": "n"},
  {"chinese": "上", "pinyin": "shàng", "english": "up", "level": 1, "type": "n"},
  {"chinese": "商店", "pinyin": "shāngdiàn", "english": "store", "level": 1, "type": "n"},
  {"chinese": "上午", "pinyin": "shàngwǔ", "english": "morning", "level": 1, "type": "n"},
  {"chinese": "时候", "pinyin": "shíhou", "english": "time", "level": 1, "type": "n"},
  {"chinese": "书", "pinyin": "shū", "english": "book", "level": 1, "type": "n", "sentence": "这本书很有意思。", "sentencePy": "Zhè běn shū hěn yǒu yìsi.", "sentenceEn": "This book is very interesting."},
  {"chinese": "水", "pinyin": "shuǐ", "english": "water", "level": 1, "type": "n", "sentence": "你想喝水吗？", "sentencePy": "Nǐ xiǎng hē shuǐ ma?", "sentenceEn": "Would you like some water?"},
  {"chinese": "水果", "pinyin": "shuǐguǒ", "english": "fruit", "level": 1, "type": "n"},
  {"chinese": "天气", "pinyin": "tiānqì", "english": "weather", "level": 1, "type": "n"},
  {"chinese": "同学", "pinyin": "tóngxué", "english": "schoolmate", "level": 1, "type": "n"},
  {"chinese": "下", "pinyin": "xià", "english": "down", "level": 1, "type": "n"},
  {"chinese": "先生", "pinyin": "xiānsheng", "english": "sir", "level": 1, "type": "n"},
  {"chinese": "现在", "pinyin": "xiànzài", "english": "now", "level": 1, "type": "n"},
  {"chinese": "小姐", "pinyin": "xiǎojiě", "english": "Miss", "level": 1, "type": "n"},
  {"chinese": "下午", "pinyin": "xiàwǔ", "english": "afternoon", "level": 1, "type": "n"},
  {"chinese": "星期", "pinyin": "xīngqī", "english": "week", "level": 1, "type": "n"},
  {"chinese": "学生", "pinyin": "xuéshēng", "english": "student", "level": 1, "type": "n", "sentence": "他是我的学生。", "sentencePy": "Tā shì wǒ de xuéshēng.", "sentenceEn": "He is my student."},
  {"chinese": "学校", "pinyin": "xuéxiào", "english": "school", "level": 1, "type": "n"},
  {"chinese": "衣服", "pinyin": "yīfu", "english": "clothes", "level": 1, "type": "n"},
  {"chinese": "医生", "pinyin": "yīshēng", "english": "doctor", "level": 1, "type": "n"},
  {"chinese": "医院", "pinyin": "yīyuàn", "english": "hospital", "level": 1, "type": "n"},
  {"chinese": "椅子", "pinyin": "yǐzi", "english": "chair", "level": 1, "type": "n"},
  {"chinese": "月", "pinyin": "yuè", "english": "month", "level": 1, "type": "n"},
  {"chinese": "中国", "pinyin": "Zhōngguó", "english": "China", "level": 1, "type": "n"},
  {"chinese": "中午", "pinyin": "zhōngwǔ", "english": "noon", "level": 1, "type": "n"},
  {"chinese": "桌子", "pinyin": "zhuōzi", "english": "desk", "level": 1, "type": "n"},
  {"chinese": "字", "pinyin": "zì", "english": "character", "level": 1, "type": "n"},
  {"chinese": "昨天", "pinyin": "zuótiān", "english": "yesterday", "level": 1, "type": "n"},
  {"chinese": "一", "pinyin": "yī", "english": "one", "level": 1, "type": "num"},
  {"chinese": "二", "pinyin": "èr", "english": "two", "level": 1, "type": "num"},
  {"chinese": "三", "pinyin": "sān", "english": "three", "level": 1, "type": "num"},
  {"chinese": "四", "pinyin": "sì", "english": "four", "level": 1, "type": "num"},
  {"chinese": "五", "pinyin": "wǔ", "english": "five", "level": 1, "type": "num"},
  {"chinese": "六", "pinyin": "liù", "english": "six", "level": 1, "type": "num"},
  {"chinese": "七", "pinyin": "qī", "english": "seven", "level": 1, "type": "num"},
  {"chinese": "八", "pinyin": "bā", "english": "eight", "level": 1, "type": "num"},
  {"chinese": "九", "pinyin": "jiǔ", "english": "nine", "level": 1, "type": "num"},
  {"chinese": "十", "pinyin": "shí", "english": "ten", "level": 1, "type": "num"},
  {"chinese": "号", "pinyin": "hào", "english": "[day number], number", "level": 1, "type": "n"},
  {"chinese": "的", "pinyin": "de", "english": "[possessive particle]", "level": 1, "type": "part"},
  {"chinese": "了", "pinyin": "le", "english": "[completion particle]", "level": 1, "type": "part"},
  {"chinese": "吗", "pinyin": "ma", "english": "[question particle]", "level": 1, "type": "part"},
  {"chinese": "呢", "pinyin": "ne", "english": "[question particle]", "level": 1, "type": "part"},
  {"chinese": "你", "pinyin": "nǐ", "english": "you", "level": 1, "type": "pron", "sentence": "你是哪国人？", "sentencePy": "Nǐ shì nǎ guó rén?", "sentenceEn": "What country are you from?"},
  {"chinese": "他", "pinyin": "tā", "english": "he, him", "level": 1, "type": "pron"},
  {"chinese": "她", "pinyin": "tā", "english": "she, her", "level": 1, "type": "pron"},
  {"chinese": "我", "pinyin": "wǒ", "english": "I, me", "level": 1, "type": "pron", "sentence": "我是学生。", "sentencePy": "Wǒ shì xuéshēng.", "sentenceEn": "I am a student."},
  {"chinese": "我们", "pinyin": "wǒmen", "english": "we, us", "level": 1, "type": "pron"},
  {"chinese": "打电话", "pinyin": "dǎ diànhuà", "english": "to call on the phone", "level": 1, "type": "v"},
  {"chinese": "在", "pinyin": "zài", "english": "in, at", "level": 1, "type": "v"},
  {"chinese": "爱", "pinyin": "ài", "english": "to love", "level": 1, "type": "v"},
  {"chinese": "吃", "pinyin": "chī", "english": "to eat", "level": 1, "type": "v", "sentence": "你想吃什么？", "sentencePy": "Nǐ xiǎng chī shénme?", "sentenceEn": "What do you want to eat?"},
  {"chinese": "读", "pinyin": "dú", "english": "to read", "level": 1, "type": "v"},
  {"chinese": "工作", "pinyin": "gōngzuò", "english": "to work", "level": 1, "type": "v", "sentence": "他每天工作八个小时。", "sentencePy": "Tā měitiān gōngzuò bā gè xiǎoshí.", "sentenceEn": "He works eight hours every day."},
  {"chinese": "喝", "pinyin": "hē", "english": "to drink", "level": 1, "type": "v", "sentence": "我想喝一杯茶。", "sentencePy": "Wǒ xiǎng hē yī bēi chá.", "sentenceEn": "I would like a cup of tea."},
  {"chinese": "回", "pinyin": "huí", "english": "to return", "level": 1, "type": "v"},
  {"chinese": "叫", "pinyin": "jiào", "english": "to call, to be called", "level": 1, "type": "v"},
  {"chinese": "开", "pinyin": "kāi", "english": "to open", "level": 1, "type": "v"},
  {"chinese": "看", "pinyin": "kàn", "english": "to look at", "level": 1, "type": "v"},
  {"chinese": "看见", "pinyin": "kànjiàn", "english": "to see", "level": 1, "type": "v"},
  {"chinese": "来", "pinyin": "lái", "english": "to come", "level": 1, "type": "v"},
  {"chinese": "买", "pinyin": "mǎi", "english": "to buy", "level": 1, "type": "v"},
  {"chinese": "请", "pinyin": "qǐng", "english": "please", "level": 1, "type": "v"},
  {"chinese": "去", "pinyin": "qù", "english": "to go", "level": 1, "type": "v"},
  {"chinese": "认识", "pinyin": "rènshi", "english": "to be familiar with", "level": 1, "type": "v"},
  {"chinese": "是", "pinyin": "shì", "english": "to be (am, is, are)", "level": 1, "type": "v"},
  {"chinese": "睡觉", "pinyin": "shuìjiào", "english": "to sleep", "level": 1, "type": "v"},
  {"chinese": "说", "pinyin": "shuō", "english": "to say, to speak", "level": 1, "type": "v"},
  {"chinese": "听", "pinyin": "tīng", "english": "to listen to", "level": 1, "type": "v"},
  {"chinese": "下雨", "pinyin": "xiàyǔ", "english": "to rain", "level": 1, "type": "v"},
  {"chinese": "写", "pinyin": "xiě", "english": "to write", "level": 1, "type": "v"},
  {"chinese": "喜欢", "pinyin": "xǐhuān", "english": "to like", "level": 1, "type": "v", "sentence": "我喜欢吃苹果。", "sentencePy": "Wǒ xǐhuān chī píngguǒ.", "sentenceEn": "I like to eat apples."},
  {"chinese": "学习", "pinyin": "xuéxí", "english": "to study", "level": 1, "type": "v", "sentence": "我每天学习汉语。", "sentencePy": "Wǒ měitiān xuéxí Hànyǔ.", "sentenceEn": "I study Chinese every day."},
  {"chinese": "有", "pinyin": "yǒu", "english": "to have", "level": 1, "type": "v"},
  {"chinese": "住", "pinyin": "zhù", "english": "to live in/at", "level": 1, "type": "v"},
  {"chinese": "做", "pinyin": "zuò", "english": "to do", "level": 1, "type": "v"},
  {"chinese": "坐", "pinyin": "zuò", "english": "to sit", "level": 1, "type": "v"},
  {"chinese": "白", "pinyin": "bái", "english": "white", "level": 2, "type": "adj"},
  {"chinese": "长", "pinyin": "cháng", "english": "long", "level": 2, "type": "adj"},
  {"chinese": "对", "pinyin": "duì", "english": "correct; toward", "level": 2, "type": "adv"},
  {"chinese": "高", "pinyin": "gāo", "english": "tall, high", "level": 2, "type": "adj"},
  {"chinese": "贵", "pinyin": "guì", "english": "expensive; noble", "level": 2, "type": "adj"},
  {"chinese": "好吃", "pinyin": "hǎochī", "english": "tasty, delicious", "level": 2, "type": "adj", "sentence": "这个菜很好吃！", "sentencePy": "Zhège cài hěn hǎochī!", "sentenceEn": "This dish is delicious!"},
  {"chinese": "黑", "pinyin": "hēi", "english": "black; dark; shady, illegal", "level": 2, "type": "adj"},
  {"chinese": "红", "pinyin": "hóng", "english": "red; popular; revolutionary", "level": 2, "type": "adj"},
  {"chinese": "近", "pinyin": "jìn", "english": "nearby, close", "level": 2, "type": "adj"},
  {"chinese": "快", "pinyin": "kuài", "english": "quick", "level": 2, "type": "adj"},
  {"chinese": "快乐", "pinyin": "kuàilè", "english": "happy", "level": 2, "type": "adj", "sentence": "祝你生日快乐！", "sentencePy": "Zhù nǐ shēngrì kuàilè!", "sentenceEn": "Happy birthday to you!"},
  {"chinese": "累", "pinyin": "lèi", "english": "tired", "level": 2, "type": "adj", "sentence": "我今天很累。", "sentencePy": "Wǒ jīntiān hěn lèi.", "sentenceEn": "I am very tired today."},
  {"chinese": "慢", "pinyin": "màn", "english": "slow", "level": 2, "type": "adj"},
  {"chinese": "忙", "pinyin": "máng", "english": "busy", "level": 2, "type": "adj"},
  {"chinese": "便宜", "pinyin": "piányi", "english": "cheap, inexpensive", "level": 2, "type": "adj"},
  {"chinese": "新", "pinyin": "xīn", "english": "new", "level": 2, "type": "adj"},
  {"chinese": "远", "pinyin": "yuǎn", "english": "far", "level": 2, "type": "adj"},
  {"chinese": "别", "pinyin": "bié", "english": "do not (do something)", "level": 2, "type": "adv"},
  {"chinese": "非常", "pinyin": "fēicháng", "english": "very, extremely", "level": 2, "type": "adv"},
  {"chinese": "还", "pinyin": "hái", "english": "still; in addition; even", "level": 2, "type": "adv"},
  {"chinese": "就", "pinyin": "jiù", "english": "just (emphasis); only", "level": 2, "type": "adv"},
  {"chinese": "也", "pinyin": "yě", "english": "also", "level": 2, "type": "adv"},
  {"chinese": "已经", "pinyin": "yǐjīng", "english": "already", "level": 2, "type": "adv"},
  {"chinese": "一起", "pinyin": "yīqǐ", "english": "together", "level": 2, "type": "adv"},
  {"chinese": "再", "pinyin": "zài", "english": "again; another; then", "level": 2, "type": "adv"},
  {"chinese": "真", "pinyin": "zhēn", "english": "really, truly; real", "level": 2, "type": "adv"},
  {"chinese": "正在", "pinyin": "zhèngzài", "english": "in the process of (doing something)", "level": 2, "type": "adv"},
  {"chinese": "最", "pinyin": "zuì", "english": "most, -est", "level": 2, "type": "adv"},
  {"chinese": "可能", "pinyin": "kěnéng", "english": "maybe, might; possible", "level": 2, "type": "adv"},
  {"chinese": "可以", "pinyin": "kěyǐ", "english": "may, can", "level": 2, "type": "v"},
  {"chinese": "要", "pinyin": "yào", "english": "to want; to need; have to; want to; will", "level": 2, "type": "v"},
  {"chinese": "但是", "pinyin": "dànshì", "english": "but", "level": 2, "type": "conj"},
  {"chinese": "虽然", "pinyin": "suīrán", "english": "although", "level": 2, "type": "conj"},
  {"chinese": "所以", "pinyin": "suǒyǐ", "english": "so, therefore", "level": 2, "type": "conj"},
  {"chinese": "因为", "pinyin": "yīnwèi", "english": "because", "level": 2, "type": "conj"},
  {"chinese": "每", "pinyin": "měi", "english": "every", "level": 2, "type": "det"},
  {"chinese": "为什么", "pinyin": "wèishénme", "english": "why", "level": 2, "type": "ques"},
  {"chinese": "次", "pinyin": "cì", "english": "[measure word for occurrences]", "level": 2, "type": "mw"},
  {"chinese": "件", "pinyin": "jiàn", "english": "[measure word]", "level": 2, "type": "mw"},
  {"chinese": "一下", "pinyin": "yīxià", "english": "[after verb] quickly, briefly", "level": 2, "type": "part"},
  {"chinese": "报纸", "pinyin": "bàozhǐ", "english": "newspaper", "level": 2, "type": "n"},
  {"chinese": "宾馆", "pinyin": "bīnguǎn", "english": "hotel", "level": 2, "type": "n"},
  {"chinese": "错", "pinyin": "cuò", "english": "mistake, fault; mistakenly", "level": 2, "type": "n"},
  {"chinese": "弟弟", "pinyin": "dìdi", "english": "younger brother", "level": 2, "type": "n"},
  {"chinese": "房间", "pinyin": "fángjiān", "english": "room", "level": 2, "type": "n"},
  {"chinese": "服务员", "pinyin": "fúwùyuán", "english": "waiter, waitress", "level": 2, "type": "n"},
  {"chinese": "哥哥", "pinyin": "gēge", "english": "older brother", "level": 2, "type": "n"},
  {"chinese": "公共汽车", "pinyin": "gōnggòng qìchē", "english": "public bus", "level": 2, "type": "n"},
  {"chinese": "公司", "pinyin": "gōngsī", "english": "company, corporation", "level": 2, "type": "n"},
  {"chinese": "孩子", "pinyin": "háizi", "english": "child", "level": 2, "type": "n"},
  {"chinese": "火车站", "pinyin": "huǒchēzhàn", "english": "train station", "level": 2, "type": "n"},
  {"chinese": "教室", "pinyin": "jiàoshì", "english": "classroom", "level": 2, "type": "n"},
  {"chinese": "机场", "pinyin": "jīchǎng", "english": "airport", "level": 2, "type": "n"},
  {"chinese": "鸡蛋", "pinyin": "jīdàn", "english": "egg", "level": 2, "type": "n"},
  {"chinese": "姐姐", "pinyin": "jiějie", "english": "older sister", "level": 2, "type": "n"},
  {"chinese": "咖啡", "pinyin": "kāfēi", "english": "coffee", "level": 2, "type": "n"},
  {"chinese": "考试", "pinyin": "kǎoshì", "english": "test, exam", "level": 2, "type": "n"},
  {"chinese": "课", "pinyin": "kè", "english": "lesson, class", "level": 2, "type": "n"},
  {"chinese": "路", "pinyin": "lù", "english": "road, path, way", "level": 2, "type": "n"},
  {"chinese": "旅游", "pinyin": "lǚyóu", "english": "travel; to travel", "level": 2, "type": "v"},
  {"chinese": "妹妹", "pinyin": "mèimei", "english": "younger sister", "level": 2, "type": "n"},
  {"chinese": "门", "pinyin": "mén", "english": "door, gate", "level": 2, "type": "n"},
  {"chinese": "面条", "pinyin": "miàntiáo", "english": "noodles", "level": 2, "type": "n"},
  {"chinese": "男", "pinyin": "nán", "english": "male", "level": 2, "type": "n"},
  {"chinese": "牛奶", "pinyin": "niúnǎi", "english": "milk", "level": 2, "type": "n"},
  {"chinese": "女", "pinyin": "nǚ", "english": "female", "level": 2, "type": "n"},
  {"chinese": "旁边", "pinyin": "pángbiān", "english": "side, next to", "level": 2, "type": "n"},
  {"chinese": "票", "pinyin": "piào", "english": "ticket", "level": 2, "type": "n"},
  {"chinese": "铅笔", "pinyin": "qiānbǐ", "english": "pencil", "level": 2, "type": "n"},
  {"chinese": "晴", "pinyin": "qíng", "english": "clear, fine (weather)", "level": 2, "type": "adj"},
  {"chinese": "妻子", "pinyin": "qīzi", "english": "wife", "level": 2, "type": "n"},
  {"chinese": "去年", "pinyin": "qùnián", "english": "last year", "level": 2, "type": "n"},
  {"chinese": "日", "pinyin": "rì", "english": "day; Japan", "level": 2, "type": "n"},
  {"chinese": "生日", "pinyin": "shēngrì", "english": "birthday", "level": 2, "type": "n"},
  {"chinese": "身体", "pinyin": "shēntǐ", "english": "body; health", "level": 2, "type": "n"},
  {"chinese": "时间", "pinyin": "shíjiān", "english": "time", "level": 2, "type": "n", "sentence": "你有时间吗？", "sentencePy": "Nǐ yǒu shíjiān ma?", "sentenceEn": "Do you have time?"},
  {"chinese": "事情", "pinyin": "shìqing", "english": "affair, matter, thing", "level": 2, "type": "n"},
  {"chinese": "手表", "pinyin": "shǒubiǎo", "english": "wristwatch", "level": 2, "type": "n"},
  {"chinese": "手机", "pinyin": "shǒujī", "english": "cell phone", "level": 2, "type": "n"},
  {"chinese": "题", "pinyin": "tí", "english": "(math) problem", "level": 2, "type": "n"},
  {"chinese": "外", "pinyin": "wài", "english": "outside", "level": 2, "type": "n"},
  {"chinese": "问题", "pinyin": "wèntí", "english": "question; problem", "level": 2, "type": "n"},
  {"chinese": "洗", "pinyin": "xǐ", "english": "to wash, to bathe", "level": 2, "type": "v"},
  {"chinese": "小时", "pinyin": "xiǎoshí", "english": "hour", "level": 2, "type": "n"},
  {"chinese": "西瓜", "pinyin": "xīguā", "english": "watermelon", "level": 2, "type": "n"},
  {"chinese": "姓", "pinyin": "xìng", "english": "surname; to be surnamed", "level": 2, "type": "v"},
  {"chinese": "希望", "pinyin": "xīwàng", "english": "to hope, to wish", "level": 2, "type": "v"},
  {"chinese": "雪", "pinyin": "xuě", "english": "snow", "level": 2, "type": "n"},
  {"chinese": "羊肉", "pinyin": "yángròu", "english": "mutton, lamb", "level": 2, "type": "n"},
  {"chinese": "眼睛", "pinyin": "yǎnjing", "english": "eye", "level": 2, "type": "n"},
  {"chinese": "颜色", "pinyin": "yánsè", "english": "color", "level": 2, "type": "n"},
  {"chinese": "药", "pinyin": "yào", "english": "medicine, drug", "level": 2, "type": "n"},
  {"chinese": "阴", "pinyin": "yīn", "english": "overcast (in 阴天)", "level": 2, "type": "adj"},
  {"chinese": "意思", "pinyin": "yìsi", "english": "meaning", "level": 2, "type": "n"},
  {"chinese": "游泳", "pinyin": "yóuyǒng", "english": "swimming; to swim", "level": 2, "type": "v"},
  {"chinese": "右边", "pinyin": "yòubian", "english": "right side", "level": 2, "type": "n"},
  {"chinese": "鱼", "pinyin": "yú", "english": "fish", "level": 2, "type": "n"},
  {"chinese": "运动", "pinyin": "yùndòng", "english": "sports, exercise; to exercise", "level": 2, "type": "v"},
  {"chinese": "早上", "pinyin": "zǎoshang", "english": "morning", "level": 2, "type": "n"},
  {"chinese": "丈夫", "pinyin": "zhàngfu", "english": "husband", "level": 2, "type": "n"},
  {"chinese": "准备", "pinyin": "zhǔnbèi", "english": "preparation; to prepare", "level": 2, "type": "v"},
  {"chinese": "左边", "pinyin": "zuǒbian", "english": "left side", "level": 2, "type": "n"},
  {"chinese": "百", "pinyin": "bǎi", "english": "hundred", "level": 2, "type": "num"},
  {"chinese": "第一", "pinyin": "dì-yī", "english": "number one, the first", "level": 2, "type": "num"},
  {"chinese": "两", "pinyin": "liǎng", "english": "two (of something)", "level": 2, "type": "num"},
  {"chinese": "千", "pinyin": "qiān", "english": "thousand", "level": 2, "type": "num"},
  {"chinese": "吧", "pinyin": "ba", "english": "[modal particle for suggestions]", "level": 2, "type": "part"},
  {"chinese": "得", "pinyin": "de", "english": "[structural particle]", "level": 2, "type": "part"},
  {"chinese": "过", "pinyin": "guo", "english": "[aspectual particle for experience]", "level": 2, "type": "part"},
  {"chinese": "着", "pinyin": "zhe", "english": "[aspectual particle for continuous state]", "level": 2, "type": "part"},
  {"chinese": "大家", "pinyin": "dàjiā", "english": "everyone", "level": 2, "type": "pron"},
  {"chinese": "您", "pinyin": "nín", "english": "you (polite)", "level": 2, "type": "pron"},
  {"chinese": "它", "pinyin": "tā", "english": "it", "level": 2, "type": "pron"},
  {"chinese": "打篮球", "pinyin": "dǎ lánqiú", "english": "to play basketball", "level": 2, "type": "v"},
  {"chinese": "踢足球", "pinyin": "tī zúqiú", "english": "to play soccer", "level": 2, "type": "v"},
  {"chinese": "比", "pinyin": "bǐ", "english": "to compare; [comparison particle]", "level": 2, "type": "v"},
  {"chinese": "从", "pinyin": "cóng", "english": "from; via", "level": 2, "type": "prep"},
  {"chinese": "给", "pinyin": "gěi", "english": "to, for; to give", "level": 2, "type": "prep"},
  {"chinese": "往", "pinyin": "wǎng", "english": "towards", "level": 2, "type": "prep"},
  {"chinese": "帮助", "pinyin": "bāngzhù", "english": "help; to help", "level": 2, "type": "v"},
  {"chinese": "唱歌", "pinyin": "chànggē", "english": "to sing a song", "level": 2, "type": "v"},
  {"chinese": "出", "pinyin": "chū", "english": "to go out; to happen", "level": 2, "type": "v"},
  {"chinese": "穿", "pinyin": "chuān", "english": "to wear; to pierce", "level": 2, "type": "v"},
  {"chinese": "到", "pinyin": "dào", "english": "to arrive; to (place); until (time)", "level": 2, "type": "v"},
  {"chinese": "等", "pinyin": "děng", "english": "to wait (for)", "level": 2, "type": "v"},
  {"chinese": "懂", "pinyin": "dǒng", "english": "to understand", "level": 2, "type": "v"},
  {"chinese": "告诉", "pinyin": "gàosu", "english": "to tell, to inform", "level": 2, "type": "v"},
  {"chinese": "介绍", "pinyin": "jièshào", "english": "to introduce", "level": 2, "type": "v"},
  {"chinese": "进", "pinyin": "jìn", "english": "to enter", "level": 2, "type": "v"},
  {"chinese": "觉得", "pinyin": "juéde", "english": "to think; to feel", "level": 2, "type": "v"},
  {"chinese": "开始", "pinyin": "kāishǐ", "english": "to start; beginning", "level": 2, "type": "v"},
  {"chinese": "离", "pinyin": "lí", "english": "to be distanced from", "level": 2, "type": "v"},
  {"chinese": "卖", "pinyin": "mài", "english": "to sell", "level": 2, "type": "v"},
  {"chinese": "跑步", "pinyin": "pǎobù", "english": "to jog, to run", "level": 2, "type": "v"},
  {"chinese": "起床", "pinyin": "qǐchuáng", "english": "to get up", "level": 2, "type": "v"},
  {"chinese": "让", "pinyin": "ràng", "english": "to let, to make", "level": 2, "type": "v"},
  {"chinese": "上班", "pinyin": "shàngbān", "english": "to go to work", "level": 2, "type": "v"},
  {"chinese": "生病", "pinyin": "shēngbìng", "english": "to fall ill", "level": 2, "type": "v"},
  {"chinese": "说话", "pinyin": "shuōhuà", "english": "to speak, to talk", "level": 2, "type": "v"},
  {"chinese": "送", "pinyin": "sòng", "english": "to give; to deliver; to see off", "level": 2, "type": "v"},
  {"chinese": "跳舞", "pinyin": "tiàowǔ", "english": "to dance", "level": 2, "type": "v"},
  {"chinese": "完", "pinyin": "wán", "english": "to finish", "level": 2, "type": "v"},
  {"chinese": "玩", "pinyin": "wán", "english": "to play; to have fun", "level": 2, "type": "v"},
  {"chinese": "晚上", "pinyin": "wǎnshang", "english": "evening", "level": 2, "type": "n"},
  {"chinese": "问", "pinyin": "wèn", "english": "to ask", "level": 2, "type": "v"},
  {"chinese": "笑", "pinyin": "xiào", "english": "to laugh, to smile", "level": 2, "type": "v"},
  {"chinese": "休息", "pinyin": "xiūxi", "english": "to rest, to sleep", "level": 2, "type": "v"},
  {"chinese": "找", "pinyin": "zhǎo", "english": "to look for", "level": 2, "type": "v"},
  {"chinese": "知道", "pinyin": "zhīdào", "english": "to know", "level": 2, "type": "v", "sentence": "我不知道他去哪儿了。", "sentencePy": "Wǒ bù zhīdào tā qù nǎr le.", "sentenceEn": "I don't know where he went."},
  {"chinese": "走", "pinyin": "zǒu", "english": "to walk, to go, to leave", "level": 2, "type": "v"},
  {"chinese": "矮", "pinyin": "ǎi", "english": "short", "level": 3, "type": "adj"},
  {"chinese": "安静", "pinyin": "ānjìng", "english": "quiet", "level": 3, "type": "adj"},
  {"chinese": "饱", "pinyin": "bǎo", "english": "full (from eating)", "level": 3, "type": "adj"},
  {"chinese": "聪明", "pinyin": "cōngming", "english": "smart, intelligent", "level": 3, "type": "adj"},
  {"chinese": "低", "pinyin": "dī", "english": "low", "level": 3, "type": "adj"},
  {"chinese": "短", "pinyin": "duǎn", "english": "short", "level": 3, "type": "adj"},
  {"chinese": "饿", "pinyin": "è", "english": "to be hungry; hungry", "level": 3, "type": "adj"},
  {"chinese": "方便", "pinyin": "fāngbiàn", "english": "convenient", "level": 3, "type": "adj"},
  {"chinese": "干净", "pinyin": "gānjìng", "english": "clean, neat", "level": 3, "type": "adj"},
  {"chinese": "高兴", "pinyin": "gāoxìng", "english": "happy", "level": 3, "type": "adj"},
  {"chinese": "坏", "pinyin": "huài", "english": "bad; spoiled; broken; to break (down)", "level": 3, "type": "adj"},
  {"chinese": "黄", "pinyin": "huáng", "english": "yellow", "level": 3, "type": "adj"},
  {"chinese": "简单", "pinyin": "jiǎndān", "english": "simple", "level": 3, "type": "adj"},
  {"chinese": "健康", "pinyin": "jiànkāng", "english": "healthy; health", "level": 3, "type": "adj"},
  {"chinese": "久", "pinyin": "jiǔ", "english": "long (time)", "level": 3, "type": "adj"},
  {"chinese": "旧", "pinyin": "jiù", "english": "old and worn out", "level": 3, "type": "adj"},
  {"chinese": "渴", "pinyin": "kě", "english": "thirsty", "level": 3, "type": "adj"},
  {"chinese": "可爱", "pinyin": "kě'ài", "english": "lovable, cute", "level": 3, "type": "adj"},
  {"chinese": "蓝", "pinyin": "lán", "english": "blue", "level": 3, "type": "adj"},
  {"chinese": "老", "pinyin": "lǎo", "english": "old", "level": 3, "type": "adj"},
  {"chinese": "绿", "pinyin": "lǜ", "english": "green", "level": 3, "type": "adj"},
  {"chinese": "难", "pinyin": "nán", "english": "difficult", "level": 3, "type": "adj"},
  {"chinese": "难过", "pinyin": "nánguò", "english": "to feel upset", "level": 3, "type": "adj"},
  {"chinese": "年轻", "pinyin": "niánqīng", "english": "youthful", "level": 3, "type": "adj"},
  {"chinese": "努力", "pinyin": "nǔlì", "english": "to try hard, to strive", "level": 3, "type": "v"},
  {"chinese": "胖", "pinyin": "pàng", "english": "fat, chubby", "level": 3, "type": "adj"},
  {"chinese": "便宜", "pinyin": "piányi", "english": "cheap, inexpensive", "level": 3, "type": "adj"},
  {"chinese": "奇怪", "pinyin": "qíguài", "english": "strange, odd; to be baffled", "level": 3, "type": "adj"},
  {"chinese": "清楚", "pinyin": "qīngchu", "english": "clear", "level": 3, "type": "adj"},
  {"chinese": "认真", "pinyin": "rènzhēn", "english": "serious; seriously", "level": 3, "type": "adj"},
  {"chinese": "热情", "pinyin": "rèqíng", "english": "enthusiastic, passionate, super friendly", "level": 3, "type": "adj"},
  {"chinese": "容易", "pinyin": "róngyì", "english": "easy", "level": 3, "type": "adj"},
  {"chinese": "瘦", "pinyin": "shòu", "english": "thin", "level": 3, "type": "adj"},
  {"chinese": "舒服", "pinyin": "shūfu", "english": "comfortable; pleasant-feeling; feeling well", "level": 3, "type": "adj"},
  {"chinese": "甜", "pinyin": "tián", "english": "sweet", "level": 3, "type": "adj"},
  {"chinese": "突然", "pinyin": "tūrán", "english": "sudden; suddenly", "level": 3, "type": "adv"},
  {"chinese": "小心", "pinyin": "xiǎoxīn", "english": "to be careful", "level": 3, "type": "v"},
  {"chinese": "新鲜", "pinyin": "xīnxiān", "english": "fresh", "level": 3, "type": "adj"},
  {"chinese": "一般", "pinyin": "yībān", "english": "in general; average", "level": 3, "type": "adj"},
  {"chinese": "一样", "pinyin": "yīyàng", "english": "the same (as)", "level": 3, "type": "adj"},
  {"chinese": "有名", "pinyin": "yǒumíng", "english": "famous, well-known", "level": 3, "type": "adj"},
  {"chinese": "着急", "pinyin": "zháojí", "english": "to be anxious", "level": 3, "type": "v"},
  {"chinese": "真", "pinyin": "zhēn", "english": "really, truly; real", "level": 3, "type": "adv"},
  {"chinese": "重要", "pinyin": "zhòngyào", "english": "important", "level": 3, "type": "adj"},
  {"chinese": "主要", "pinyin": "zhǔyào", "english": "main; mainly", "level": 3, "type": "adj"},
  {"chinese": "比较", "pinyin": "bǐjiào", "english": "to compare; comparatively", "level": 3, "type": "v"},
  {"chinese": "必须", "pinyin": "bìxū", "english": "must", "level": 3, "type": "adv"},
  {"chinese": "才", "pinyin": "cái", "english": "only; just now; not until...", "level": 3, "type": "adv"},
  {"chinese": "当然", "pinyin": "dāngrán", "english": "of course, naturally", "level": 3, "type": "adv"},
  {"chinese": "多么", "pinyin": "duōme", "english": "how (wonderful etc)/what (a great idea etc)", "level": 3, "type": "adv"},
  {"chinese": "更", "pinyin": "gèng", "english": "even more", "level": 3, "type": "adv"},
  {"chinese": "极", "pinyin": "jí", "english": "extremely", "level": 3, "type": "adv"},
  {"chinese": "几乎", "pinyin": "jīhū", "english": "almost, nearly", "level": 3, "type": "adv"},
  {"chinese": "经常", "pinyin": "jīngcháng", "english": "often", "level": 3, "type": "adv"},
  {"chinese": "马上", "pinyin": "mǎshàng", "english": "right away; on horseback", "level": 3, "type": "adv"},
  {"chinese": "其实", "pinyin": "qíshí", "english": "actually, in fact", "level": 3, "type": "adv"},
  {"chinese": "特别", "pinyin": "tèbié", "english": "special", "level": 3, "type": "adv"},
  {"chinese": "先", "pinyin": "xiān", "english": "first, in advance", "level": 3, "type": "adv"},
  {"chinese": "一定", "pinyin": "yīdìng", "english": "definitely", "level": 3, "type": "adv"},
  {"chinese": "一共", "pinyin": "yīgòng", "english": "altogether", "level": 3, "type": "adv"},
  {"chinese": "一直", "pinyin": "yīzhí", "english": "continuously; straight (forward)", "level": 3, "type": "adv"},
  {"chinese": "又", "pinyin": "yòu", "english": "(once) again", "level": 3, "type": "adv"},
  {"chinese": "越", "pinyin": "yuè", "english": "to surpass; the more...", "level": 3, "type": "adv"},
  {"chinese": "只", "pinyin": "zhǐ", "english": "only", "level": 3, "type": "adv"},
  {"chinese": "终于", "pinyin": "zhōngyú", "english": "at last; in the end; finally; eventually", "level": 3, "type": "adv"},
  {"chinese": "总是", "pinyin": "zǒngshì", "english": "always", "level": 3, "type": "adv"},
  {"chinese": "应该", "pinyin": "yīnggāi", "english": "should, ought to", "level": 3, "type": "v"},
  {"chinese": "愿意", "pinyin": "yuànyì", "english": "to be willing", "level": 3, "type": "v"},
  {"chinese": "不但", "pinyin": "bùdàn", "english": "not only (... but also...)", "level": 3, "type": "conj"},
  {"chinese": "而且", "pinyin": "érqiě", "english": "in addition, furthermore", "level": 3, "type": "conj"},
  {"chinese": "还是", "pinyin": "háishì", "english": "or; still", "level": 3, "type": "conj"},
  {"chinese": "或者", "pinyin": "huòzhě", "english": "or [in statements]", "level": 3, "type": "conj"},
  {"chinese": "然后", "pinyin": "ránhòu", "english": "and then", "level": 3, "type": "conj"},
  {"chinese": "如果", "pinyin": "rúguǒ", "english": "if", "level": 3, "type": "conj"},
  {"chinese": "虽然", "pinyin": "suīrán", "english": "although", "level": 3, "type": "conj"},
  {"chinese": "一边", "pinyin": "yībiān", "english": "one side; while doing...", "level": 3, "type": "conj"},
  {"chinese": "只有", "pinyin": "zhǐyǒu", "english": "only (if)", "level": 3, "type": "conj"},
  {"chinese": "那么", "pinyin": "nàme", "english": "like that, in that way; in that case", "level": 3, "type": "pron"},
  {"chinese": "其他", "pinyin": "qítā", "english": "other", "level": 3, "type": "pron"},
  {"chinese": "这么", "pinyin": "zhème", "english": "so much, this much", "level": 3, "type": "pron"},
  {"chinese": "把", "pinyin": "bǎ", "english": "[measure word for things with a handle]; [particle for disposal construction]", "level": 3, "type": "part"},
  {"chinese": "层", "pinyin": "céng", "english": "[measure word for floor, level of a building]", "level": 3, "type": "mw"},
  {"chinese": "段", "pinyin": "duàn", "english": "[measure word for length (of time), paragraph]", "level": 3, "type": "mw"},
  {"chinese": "分", "pinyin": "fēn", "english": "a unit of money (equal to 1/100 yuan); to divide, to separate", "level": 3, "type": "num"},
  {"chinese": "公斤", "pinyin": "gōngjīn", "english": "kilogram (kg)", "level": 3, "type": "num"},
  {"chinese": "角", "pinyin": "jiǎo", "english": "unit of money (equal to 1/10 yuan)", "level": 3, "type": "num"},
  {"chinese": "刻", "pinyin": "kè", "english": "quarter (hour)", "level": 3, "type": "num"},
  {"chinese": "口", "pinyin": "kǒu", "english": "[measure word for bites of food or people in a household]; mouth", "level": 3, "type": "n"},
  {"chinese": "辆", "pinyin": "liàng", "english": "[measure word for cars]", "level": 3, "type": "mw"},
  {"chinese": "双", "pinyin": "shuāng", "english": "pair, [measure word for pairs of things]", "level": 3, "type": "mw"},
  {"chinese": "条", "pinyin": "tiáo", "english": "[measure word for long things]", "level": 3, "type": "mw"},
  {"chinese": "碗", "pinyin": "wǎn", "english": "[measure word for bowls of something]; bowl", "level": 3, "type": "n"},
  {"chinese": "位", "pinyin": "wèi", "english": "[polite measure word for people]", "level": 3, "type": "mw"},
  {"chinese": "元", "pinyin": "yuán", "english": "[measure word for units of money]", "level": 3, "type": "num"},
  {"chinese": "张", "pinyin": "zhāng", "english": "[measure word for flat things]", "level": 3, "type": "mw"},
  {"chinese": "只", "pinyin": "zhī", "english": "[measure word for small things]", "level": 3, "type": "mw"},
  {"chinese": "种", "pinyin": "zhǒng", "english": "kind, type", "level": 3, "type": "n"},
  {"chinese": "爱好", "pinyin": "àihào", "english": "hobby", "level": 3, "type": "n"},
  {"chinese": "阿姨", "pinyin": "āyí", "english": "maternal aunt; housekeeper", "level": 3, "type": "n"},
  {"chinese": "班", "pinyin": "bān", "english": "class, team; work", "level": 3, "type": "n"},
  {"chinese": "办法", "pinyin": "bànfǎ", "english": "way of doing, method", "level": 3, "type": "n"},
  {"chinese": "办公室", "pinyin": "bàngōngshì", "english": "office", "level": 3, "type": "n"},
  {"chinese": "包", "pinyin": "bāo", "english": "bag", "level": 3, "type": "n"},
  {"chinese": "报纸", "pinyin": "bàozhǐ", "english": "newspaper", "level": 3, "type": "n"},
  {"chinese": "北", "pinyin": "běi", "english": "north", "level": 3, "type": "n"},
  {"chinese": "北方", "pinyin": "běifāng", "english": "the north", "level": 3, "type": "n"},
  {"chinese": "杯子", "pinyin": "bēizi", "english": "cup, glass", "level": 3, "type": "n"},
  {"chinese": "变化", "pinyin": "biànhuà", "english": "change; to change", "level": 3, "type": "v"},
  {"chinese": "表演", "pinyin": "biǎoyǎn", "english": "play, show, performance; to perform, to act", "level": 3, "type": "v"},
  {"chinese": "别人", "pinyin": "biérén", "english": "other people", "level": 3, "type": "pron"},
  {"chinese": "笔记本", "pinyin": "bǐjìběn", "english": "notebook", "level": 3, "type": "n"},
  {"chinese": "宾馆", "pinyin": "bīnguǎn", "english": "hotel", "level": 3, "type": "n"},
  {"chinese": "冰箱", "pinyin": "bīngxiāng", "english": "refrigerator (lit. \"ice box\")", "level": 3, "type": "n"},
  {"chinese": "比赛", "pinyin": "bǐsài", "english": "competition (sports, etc.)", "level": 3, "type": "n"},
  {"chinese": "鼻子", "pinyin": "bízi", "english": "nose", "level": 3, "type": "n"},
  {"chinese": "菜", "pinyin": "cài", "english": "vegetable; dish (of food); cuisine (of a region)", "level": 3, "type": "n"},
  {"chinese": "菜单", "pinyin": "càidān", "english": "menu", "level": 3, "type": "n"},
  {"chinese": "船", "pinyin": "chuán", "english": "boat, ship", "level": 3, "type": "n"},
  {"chinese": "草", "pinyin": "cǎo", "english": "grass", "level": 3, "type": "n"},
  {"chinese": "超市", "pinyin": "chāoshì", "english": "supermarket", "level": 3, "type": "n"},
  {"chinese": "成绩", "pinyin": "chéngjì", "english": "achievement; grades", "level": 3, "type": "n"},
  {"chinese": "城市", "pinyin": "chéngshì", "english": "city", "level": 3, "type": "n"},
  {"chinese": "衬衫", "pinyin": "chènshān", "english": "dress shirt", "level": 3, "type": "n"},
  {"chinese": "厨房", "pinyin": "chúfáng", "english": "kitchen", "level": 3, "type": "n"},
  {"chinese": "春", "pinyin": "chūn", "english": "spring", "level": 3, "type": "n"},
  {"chinese": "出租车", "pinyin": "chūzūchē", "english": "taxi", "level": 3, "type": "n"},
  {"chinese": "词典", "pinyin": "cídiǎn", "english": "dictionary (of words)", "level": 3, "type": "n"},
  {"chinese": "词语", "pinyin": "cíyǔ", "english": "word, expression", "level": 3, "type": "n"},
  {"chinese": "蛋糕", "pinyin": "dàngāo", "english": "cake", "level": 3, "type": "n"},
  {"chinese": "打算", "pinyin": "dǎsuàn", "english": "plan; to plan (to)", "level": 3, "type": "v"},
  {"chinese": "灯", "pinyin": "dēng", "english": "light, lamp", "level": 3, "type": "n"},
  {"chinese": "电脑", "pinyin": "diànnǎo", "english": "computer", "level": 3, "type": "n"},
  {"chinese": "电视", "pinyin": "diànshì", "english": "television, TV", "level": 3, "type": "n"},
  {"chinese": "电梯", "pinyin": "diàntī", "english": "elevator; escalator", "level": 3, "type": "n"},
  {"chinese": "电影", "pinyin": "diànyǐng", "english": "movie, film", "level": 3, "type": "n"},
  {"chinese": "电子邮件", "pinyin": "diànzǐ yóujiàn", "english": "email (lit. \"electronic mail\")", "level": 3, "type": "n"},
  {"chinese": "地方", "pinyin": "dìfang", "english": "place", "level": 3, "type": "n"},
  {"chinese": "地铁", "pinyin": "dìtiě", "english": "subway, metro", "level": 3, "type": "n"},
  {"chinese": "地图", "pinyin": "dìtú", "english": "map", "level": 3, "type": "n"},
  {"chinese": "东", "pinyin": "dōng", "english": "east", "level": 3, "type": "n"},
  {"chinese": "冬", "pinyin": "dōng", "english": "winter", "level": 3, "type": "n"},
  {"chinese": "动物", "pinyin": "dòngwù", "english": "animal", "level": 3, "type": "n"},
  {"chinese": "东西", "pinyin": "dōngxi", "english": "thing", "level": 3, "type": "n"},
  {"chinese": "耳朵", "pinyin": "ěrduo", "english": "ear", "level": 3, "type": "n"},
  {"chinese": "飞机", "pinyin": "fēijī", "english": "airplane", "level": 3, "type": "n"},
  {"chinese": "附近", "pinyin": "fùjìn", "english": "nearby, (in the) vicinity", "level": 3, "type": "n"},
  {"chinese": "刚才", "pinyin": "gāngcái", "english": "(just) a moment ago", "level": 3, "type": "n"},
  {"chinese": "个子", "pinyin": "gèzi", "english": "height, stature", "level": 3, "type": "n"},
  {"chinese": "公园", "pinyin": "gōngyuán", "english": "public park", "level": 3, "type": "n"},
  {"chinese": "狗", "pinyin": "gǒu", "english": "dog", "level": 3, "type": "n"},
  {"chinese": "关系", "pinyin": "guānxi", "english": "relation, relationship; to concern", "level": 3, "type": "n"},
  {"chinese": "国家", "pinyin": "guójiā", "english": "country, nation", "level": 3, "type": "n"},
  {"chinese": "过去", "pinyin": "guòqù", "english": "(in the) past; to go over (to a place)", "level": 3, "type": "v"},
  {"chinese": "果汁", "pinyin": "guǒzhī", "english": "fruit juice", "level": 3, "type": "n"},
  {"chinese": "故事", "pinyin": "gùshi", "english": "story", "level": 3, "type": "n"},
  {"chinese": "河", "pinyin": "hé", "english": "river", "level": 3, "type": "n"},
  {"chinese": "黑板", "pinyin": "hēibǎn", "english": "blackboard", "level": 3, "type": "n"},
  {"chinese": "后来", "pinyin": "hòulái", "english": "afterwards; later", "level": 3, "type": "n"},
  {"chinese": "花", "pinyin": "huā", "english": "flower; to spend (money, time)", "level": 3, "type": "n"},
  {"chinese": "画", "pinyin": "huà", "english": "picture, painting; to draw", "level": 3, "type": "v"},
  {"chinese": "黄河", "pinyin": "HuángHé", "english": "Yellow River, Huang He", "level": 3, "type": "n"},
  {"chinese": "环境", "pinyin": "huánjìng", "english": "environment, circumstances, surroundings", "level": 3, "type": "n"},
  {"chinese": "花园", "pinyin": "huāyuán", "english": "(flower) garden", "level": 3, "type": "n"},
  {"chinese": "会议", "pinyin": "huìyì", "english": "meeting", "level": 3, "type": "n"},
  {"chinese": "护照", "pinyin": "hùzhào", "english": "passport", "level": 3, "type": "n"},
  {"chinese": "脚", "pinyin": "jiǎo", "english": "foot, leg", "level": 3, "type": "n"},
  {"chinese": "街道", "pinyin": "jiēdào", "english": "street", "level": 3, "type": "n"},
  {"chinese": "节目", "pinyin": "jiémù", "english": "program", "level": 3, "type": "n"},
  {"chinese": "节日", "pinyin": "jiérì", "english": "holiday, festival", "level": 3, "type": "n"},
  {"chinese": "机会", "pinyin": "jīhuì", "english": "opportunity", "level": 3, "type": "n"},
  {"chinese": "季节", "pinyin": "jìjié", "english": "season, time", "level": 3, "type": "n"},
  {"chinese": "经理", "pinyin": "jīnglǐ", "english": "manager", "level": 3, "type": "n"},
  {"chinese": "句子", "pinyin": "jùzi", "english": "sentence", "level": 3, "type": "n"},
  {"chinese": "客人", "pinyin": "kèrén", "english": "visitor, guest, customer, client", "level": 3, "type": "n"},
  {"chinese": "空调", "pinyin": "kōngtiáo", "english": "air conditioning", "level": 3, "type": "n"},
  {"chinese": "筷子", "pinyin": "kuàizi", "english": "chopsticks", "level": 3, "type": "n"},
  {"chinese": "裤子", "pinyin": "kùzi", "english": "long pants", "level": 3, "type": "n"},
  {"chinese": "脸", "pinyin": "liǎn", "english": "face", "level": 3, "type": "n"},
  {"chinese": "练习", "pinyin": "liànxí", "english": "practice, a (language) exercise; to practice", "level": 3, "type": "v"},
  {"chinese": "邻居", "pinyin": "línjū", "english": "neighbor", "level": 3, "type": "n"},
  {"chinese": "历史", "pinyin": "lìshǐ", "english": "history", "level": 3, "type": "n"},
  {"chinese": "礼物", "pinyin": "lǐwù", "english": "gift, present", "level": 3, "type": "n"},
  {"chinese": "楼", "pinyin": "lóu", "english": "building; floor (of a building)", "level": 3, "type": "n"},
  {"chinese": "路", "pinyin": "lù", "english": "road, path, way", "level": 3, "type": "n"},
  {"chinese": "马", "pinyin": "mǎ", "english": "horse", "level": 3, "type": "n"},
  {"chinese": "猫", "pinyin": "māo", "english": "cat", "level": 3, "type": "n"},
  {"chinese": "帽子", "pinyin": "màozi", "english": "hat, cap, hood (of a jacket)", "level": 3, "type": "n"},
  {"chinese": "门", "pinyin": "mén", "english": "door, gate", "level": 3, "type": "n"},
  {"chinese": "米", "pinyin": "mǐ", "english": "(uncooked) rice; meter", "level": 3, "type": "n"},
  {"chinese": "面包", "pinyin": "miànbāo", "english": "bread", "level": 3, "type": "n"},
  {"chinese": "面条", "pinyin": "miàntiáo", "english": "noodles", "level": 3, "type": "n"},
  {"chinese": "奶奶", "pinyin": "nǎinai", "english": "paternal grandmother", "level": 3, "type": "n"},
  {"chinese": "南", "pinyin": "nán", "english": "south", "level": 3, "type": "n"},
  {"chinese": "年级", "pinyin": "niánjí", "english": "grade (in school)", "level": 3, "type": "n"},
  {"chinese": "鸟", "pinyin": "niǎo", "english": "bird", "level": 3, "type": "n"},
  {"chinese": "盘子", "pinyin": "pánzi", "english": "plate, dish, tray", "level": 3, "type": "n"},
  {"chinese": "票", "pinyin": "piào", "english": "ticket", "level": 3, "type": "n"},
  {"chinese": "啤酒", "pinyin": "píjiǔ", "english": "beer", "level": 3, "type": "n"},
  {"chinese": "瓶子", "pinyin": "píngzi", "english": "bottle", "level": 3, "type": "n"},
  {"chinese": "皮鞋", "pinyin": "píxié", "english": "leather shoes", "level": 3, "type": "n"},
  {"chinese": "葡萄", "pinyin": "pútao", "english": "grape(s)", "level": 3, "type": "n"},
  {"chinese": "普通话", "pinyin": "pǔtōnghuà", "english": "Mandarin (lit. \"common speech\")", "level": 3, "type": "n"},
  {"chinese": "钱", "pinyin": "qián", "english": "money", "level": 3, "type": "n"},
  {"chinese": "铅笔", "pinyin": "qiānbǐ", "english": "pencil", "level": 3, "type": "n"},
  {"chinese": "秋", "pinyin": "qiū", "english": "autumn", "level": 3, "type": "n"},
  {"chinese": "裙子", "pinyin": "qúnzi", "english": "dress, skirt", "level": 3, "type": "n"},
  {"chinese": "伞", "pinyin": "sǎn", "english": "umbrella, parasol", "level": 3, "type": "n"},
  {"chinese": "声音", "pinyin": "shēngyīn", "english": "sound, voice", "level": 3, "type": "n"},
  {"chinese": "世界", "pinyin": "shìjiè", "english": "world", "level": 3, "type": "n"},
  {"chinese": "手机", "pinyin": "shǒujī", "english": "cell phone, mobile phone", "level": 3, "type": "n"},
  {"chinese": "书", "pinyin": "shū", "english": "book", "level": 3, "type": "n"},
  {"chinese": "树", "pinyin": "shù", "english": "tree", "level": 3, "type": "n"},
  {"chinese": "水平", "pinyin": "shuǐpíng", "english": "level (of ability, etc.)", "level": 3, "type": "n"},
  {"chinese": "叔叔", "pinyin": "shūshu", "english": "uncle, father's younger brother", "level": 3, "type": "n"},
  {"chinese": "数学", "pinyin": "shùxué", "english": "mathematics", "level": 3, "type": "n"},
  {"chinese": "司机", "pinyin": "sījī", "english": "driver", "level": 3, "type": "n"},
  {"chinese": "太阳", "pinyin": "tàiyáng", "english": "sun", "level": 3, "type": "n"},
  {"chinese": "糖", "pinyin": "táng", "english": "sugar; candy", "level": 3, "type": "n"},
  {"chinese": "天气", "pinyin": "tiānqì", "english": "weather", "level": 3, "type": "n"},
  {"chinese": "体育", "pinyin": "tǐyù", "english": "physical education, sports", "level": 3, "type": "n"},
  {"chinese": "同事", "pinyin": "tóngshì", "english": "co-worker, colleague", "level": 3, "type": "n"},
  {"chinese": "头发", "pinyin": "tóufa", "english": "hair (on the head)", "level": 3, "type": "n"},
  {"chinese": "腿", "pinyin": "tuǐ", "english": "leg", "level": 3, "type": "n"},
  {"chinese": "图书馆", "pinyin": "túshūguǎn", "english": "library", "level": 3, "type": "n"},
  {"chinese": "文化", "pinyin": "wénhuà", "english": "culture", "level": 3, "type": "n"},
  {"chinese": "问题", "pinyin": "wèntí", "english": "question; problem, issue", "level": 3, "type": "n"},
  {"chinese": "西", "pinyin": "xī", "english": "west", "level": 3, "type": "n"},
  {"chinese": "夏", "pinyin": "xià", "english": "summer", "level": 3, "type": "n"},
  {"chinese": "香蕉", "pinyin": "xiāngjiāo", "english": "banana", "level": 3, "type": "n"},
  {"chinese": "先生", "pinyin": "xiānsheng", "english": "Mr.; husband; sir", "level": 3, "type": "n"},
  {"chinese": "校长", "pinyin": "xiàozhǎng", "english": "principal", "level": 3, "type": "n"},
  {"chinese": "习惯", "pinyin": "xíguàn", "english": "habit, custom", "level": 3, "type": "n"},
  {"chinese": "信", "pinyin": "xìn", "english": "letter; to believe", "level": 3, "type": "n"},
  {"chinese": "行李箱", "pinyin": "xínglixiāng", "english": "trunk (of a car), baggage compartment", "level": 3, "type": "n"},
  {"chinese": "兴趣", "pinyin": "xìngqù", "english": "interest (in something)", "level": 3, "type": "n"},
  {"chinese": "新闻", "pinyin": "xīnwén", "english": "news", "level": 3, "type": "n"},
  {"chinese": "信用卡", "pinyin": "xìnyòngkǎ", "english": "credit card", "level": 3, "type": "n"},
  {"chinese": "熊猫", "pinyin": "xíongmāo", "english": "panda", "level": 3, "type": "n"},
  {"chinese": "洗手间", "pinyin": "xǐshǒujiān", "english": "restroom", "level": 3, "type": "n"},
  {"chinese": "选择", "pinyin": "xuǎnzé", "english": "choice; to choose", "level": 3, "type": "v"},
  {"chinese": "雪", "pinyin": "xuě", "english": "snow", "level": 3, "type": "n"},
  {"chinese": "眼镜", "pinyin": "yǎnjìng", "english": "glasses", "level": 3, "type": "n"},
  {"chinese": "眼睛", "pinyin": "yǎnjing", "english": "eye", "level": 3, "type": "n"},
  {"chinese": "要求", "pinyin": "yāoqiú", "english": "demand(s); to demand", "level": 3, "type": "v"},
  {"chinese": "爷爷", "pinyin": "yéye", "english": "paternal grandfather", "level": 3, "type": "n"},
  {"chinese": "衣服", "pinyin": "yīfu", "english": "clothing", "level": 3, "type": "n"},
  {"chinese": "以后", "pinyin": "yǐhòu", "english": "after, later on, in the future", "level": 3, "type": "n"},
  {"chinese": "一会儿", "pinyin": "yīhuìr", "english": "a while", "level": 3, "type": "n"},
  {"chinese": "影响", "pinyin": "yǐngxiǎng", "english": "an influence", "level": 3, "type": "n"},
  {"chinese": "银行", "pinyin": "yínháng", "english": "bank", "level": 3, "type": "n"},
  {"chinese": "饮料", "pinyin": "yǐnliào", "english": "beverage, (non-alcoholic) drink", "level": 3, "type": "n"},
  {"chinese": "音乐", "pinyin": "yīnyuè", "english": "music", "level": 3, "type": "n"},
  {"chinese": "以前", "pinyin": "yǐqián", "english": "before, previous; ago", "level": 3, "type": "n"},
  {"chinese": "游戏", "pinyin": "yóuxì", "english": "game", "level": 3, "type": "n"},
  {"chinese": "鱼", "pinyin": "yú", "english": "fish", "level": 3, "type": "n"},
  {"chinese": "月亮", "pinyin": "yuèliang", "english": "the moon", "level": 3, "type": "n"},
  {"chinese": "照片", "pinyin": "zhàopiàn", "english": "photograph", "level": 3, "type": "n"},
  {"chinese": "照相机", "pinyin": "zhàoxiàngjī", "english": "camera", "level": 3, "type": "n"},
  {"chinese": "中间", "pinyin": "zhōngjiān", "english": "in the middle", "level": 3, "type": "n"},
  {"chinese": "中文", "pinyin": "Zhōngwén", "english": "Chinese (language)", "level": 3, "type": "n"},
  {"chinese": "周末", "pinyin": "zhōumò", "english": "weekend", "level": 3, "type": "n"},
  {"chinese": "字典", "pinyin": "zìdiǎn", "english": "character dictionary", "level": 3, "type": "n"},
  {"chinese": "自行车", "pinyin": "zìxíngchē", "english": "bicycle", "level": 3, "type": "n"},
  {"chinese": "嘴", "pinyin": "zuǐ", "english": "mouth", "level": 3, "type": "n"},
  {"chinese": "最后", "pinyin": "zuìhòu", "english": "last", "level": 3, "type": "adj"},
  {"chinese": "最近", "pinyin": "zuìjìn", "english": "recently, these days", "level": 3, "type": "adv"},
  {"chinese": "作业", "pinyin": "zuòyè", "english": "homework", "level": 3, "type": "n"},
  {"chinese": "作用", "pinyin": "zuòyòng", "english": "impact", "level": 3, "type": "n"},
  {"chinese": "半", "pinyin": "bàn", "english": "half", "level": 3, "type": "num"},
  {"chinese": "万", "pinyin": "wàn", "english": "ten thousand", "level": 3, "type": "num"},
  {"chinese": "地", "pinyin": "de", "english": "[structural particle used before a verb or adjective]", "level": 3, "type": "part"},
  {"chinese": "啊", "pinyin": "a", "english": "[sentence-final modal particle]", "level": 3, "type": "part"},
  {"chinese": "自己", "pinyin": "zìjǐ", "english": "oneself", "level": 3, "type": "pron"},
  {"chinese": "感兴趣", "pinyin": "gǎn xìngqù", "english": "to be interested in", "level": 3, "type": "v"},
  {"chinese": "被", "pinyin": "bèi", "english": "[passive marker]", "level": 3, "type": "part"},
  {"chinese": "除了", "pinyin": "chúle", "english": "except for", "level": 3, "type": "prep"},
  {"chinese": "跟", "pinyin": "gēn", "english": "and, with", "level": 3, "type": "prep"},
  {"chinese": "根据", "pinyin": "gēnjù", "english": "according to, based on", "level": 3, "type": "prep"},
  {"chinese": "关于", "pinyin": "guānyú", "english": "about, concerning, regarding", "level": 3, "type": "prep"},
  {"chinese": "为", "pinyin": "wèi", "english": "for; to", "level": 3, "type": "prep"},
  {"chinese": "为了", "pinyin": "wèile", "english": "for the purpose of, in order to", "level": 3, "type": "prep"},
  {"chinese": "向", "pinyin": "xiàng", "english": "towards", "level": 3, "type": "prep"},
  {"chinese": "搬", "pinyin": "bān", "english": "to move (house, or large heavy objects)", "level": 3, "type": "v"},
  {"chinese": "帮忙", "pinyin": "bāngmáng", "english": "to help, to do a favor", "level": 3, "type": "v"},
  {"chinese": "表示", "pinyin": "biǎoshì", "english": "to show, to indicate", "level": 3, "type": "v"},
  {"chinese": "参加", "pinyin": "cānjiā", "english": "to participate in, to attend", "level": 3, "type": "v"},
  {"chinese": "差", "pinyin": "chà", "english": "poor quality; to differ", "level": 3, "type": "v"},
  {"chinese": "迟到", "pinyin": "chídào", "english": "to arrive late", "level": 3, "type": "v"},
  {"chinese": "出现", "pinyin": "chūxiàn", "english": "to appear", "level": 3, "type": "v"},
  {"chinese": "带", "pinyin": "dài", "english": "to carry", "level": 3, "type": "v"},
  {"chinese": "担心", "pinyin": "dānxīn", "english": "to worry", "level": 3, "type": "v"},
  {"chinese": "打扫", "pinyin": "dǎsǎo", "english": "to clean", "level": 3, "type": "v"},
  {"chinese": "懂", "pinyin": "dǒng", "english": "to understand", "level": 3, "type": "v"},
  {"chinese": "锻炼", "pinyin": "duànliàn", "english": "to exercise, to work out, to train a skill", "level": 3, "type": "v"},
  {"chinese": "发", "pinyin": "fā", "english": "to send out", "level": 3, "type": "v"},
  {"chinese": "放", "pinyin": "fàng", "english": "to put, to place; to release", "level": 3, "type": "v"},
  {"chinese": "放心", "pinyin": "fàngxīn", "english": "to be at ease", "level": 3, "type": "v"},
  {"chinese": "发烧", "pinyin": "fāshāo", "english": "to have a fever", "level": 3, "type": "v"},
  {"chinese": "发现", "pinyin": "fāxiàn", "english": "to find; to discover", "level": 3, "type": "v"},
  {"chinese": "复习", "pinyin": "fùxí", "english": "to review (as part of one's studies)", "level": 3, "type": "v"},
  {"chinese": "敢", "pinyin": "gǎn", "english": "to dare (to)", "level": 3, "type": "v"},
  {"chinese": "感冒", "pinyin": "gǎnmào", "english": "to catch cold, to have a cold; a cold", "level": 3, "type": "v"},
  {"chinese": "刮风", "pinyin": "guāfēng", "english": "the wind blows", "level": 3, "type": "v"},
  {"chinese": "关", "pinyin": "guān", "english": "to close, to shut, to turn off", "level": 3, "type": "v"},
  {"chinese": "关心", "pinyin": "guānxīn", "english": "to care for, to be concerned about", "level": 3, "type": "v"},
  {"chinese": "过", "pinyin": "guò", "english": "to spend, to pass", "level": 3, "type": "v"},
  {"chinese": "害怕", "pinyin": "hàipà", "english": "to be afraid; to be scared", "level": 3, "type": "v"},
  {"chinese": "还", "pinyin": "huán", "english": "to return (money, etc.)", "level": 3, "type": "v"},
  {"chinese": "换", "pinyin": "huàn", "english": "to replace; to exchange", "level": 3, "type": "v"},
  {"chinese": "欢迎", "pinyin": "huānyíng", "english": "to welcome", "level": 3, "type": "v"},
  {"chinese": "回答", "pinyin": "huídá", "english": "to reply, to answer; the answer", "level": 3, "type": "v"},
  {"chinese": "检查", "pinyin": "jiǎnchá", "english": "to inspect, to examine", "level": 3, "type": "v"},
  {"chinese": "讲", "pinyin": "jiǎng", "english": "to speak", "level": 3, "type": "v"},
  {"chinese": "见面", "pinyin": "jiànmiàn", "english": "to meet", "level": 3, "type": "v"},
  {"chinese": "教", "pinyin": "jiāo", "english": "to teach", "level": 3, "type": "v"},
  {"chinese": "记得", "pinyin": "jìde", "english": "to remember", "level": 3, "type": "v"},
  {"chinese": "接", "pinyin": "jiē", "english": "to receive, to pick up", "level": 3, "type": "v"},
  {"chinese": "借", "pinyin": "jiè", "english": "to lend, to borrow", "level": 3, "type": "v"},
  {"chinese": "结婚", "pinyin": "jiéhūn", "english": "to get married", "level": 3, "type": "v"},
  {"chinese": "解决", "pinyin": "jiějué", "english": "to resolve", "level": 3, "type": "v"},
  {"chinese": "结束", "pinyin": "jiéshù", "english": "to be finished", "level": 3, "type": "v"},
  {"chinese": "经过", "pinyin": "jīngguò", "english": "to pass, to go through", "level": 3, "type": "v"},
  {"chinese": "决定", "pinyin": "juédìng", "english": "to decide", "level": 3, "type": "v"},
  {"chinese": "哭", "pinyin": "kū", "english": "to cry", "level": 3, "type": "v"},
  {"chinese": "离开", "pinyin": "líkāi", "english": "to leave", "level": 3, "type": "v"},
  {"chinese": "了解", "pinyin": "liǎojiě", "english": "to be fully familiar with", "level": 3, "type": "v"},
  {"chinese": "聊天", "pinyin": "liáotiān", "english": "to chat", "level": 3, "type": "v"},
  {"chinese": "留学", "pinyin": "liúxué", "english": "to study abroad", "level": 3, "type": "v"},
  {"chinese": "卖", "pinyin": "mài", "english": "to sell", "level": 3, "type": "v"},
  {"chinese": "满意", "pinyin": "mǎnyì", "english": "to be satisfied", "level": 3, "type": "v"},
  {"chinese": "明白", "pinyin": "míngbai", "english": "to understand, to realize", "level": 3, "type": "v"},
  {"chinese": "拿", "pinyin": "ná", "english": "to get, to pick up", "level": 3, "type": "v"},
  {"chinese": "爬山", "pinyin": "páshān", "english": "to climb a mountain, to go hiking", "level": 3, "type": "v"},
  {"chinese": "骑", "pinyin": "qí", "english": "to ride (by straddling, as when riding a horse or bike)", "level": 3, "type": "v"},
  {"chinese": "起床", "pinyin": "qǐchuáng", "english": "to get up (out of bed)", "level": 3, "type": "v"},
  {"chinese": "起飞", "pinyin": "qǐfēi", "english": "to take off (in an airplane)", "level": 3, "type": "v"},
  {"chinese": "起来", "pinyin": "qǐlái", "english": "to get up; upward", "level": 3, "type": "v"},
  {"chinese": "请", "pinyin": "qǐng", "english": "to invite, to request, to treat (to a meal, etc.); please", "level": 3, "type": "v"},
  {"chinese": "请假", "pinyin": "qǐngjià", "english": "to ask for leave", "level": 3, "type": "v"},
  {"chinese": "认为", "pinyin": "rènwéi", "english": "to believe; to think", "level": 3, "type": "v"},
  {"chinese": "上网", "pinyin": "shàngwǎng", "english": "to go online, to use the internet", "level": 3, "type": "v"},
  {"chinese": "生气", "pinyin": "shēngqì", "english": "to get angry", "level": 3, "type": "v"},
  {"chinese": "使", "pinyin": "shǐ", "english": "to make, to cause", "level": 3, "type": "v"},
  {"chinese": "试", "pinyin": "shì", "english": "to try", "level": 3, "type": "v"},
  {"chinese": "刷牙", "pinyin": "shuāyá", "english": "to brush one's teeth", "level": 3, "type": "v"},
  {"chinese": "疼", "pinyin": "téng", "english": "to hurt, to be sore; to love dearly", "level": 3, "type": "v"},
  {"chinese": "提高", "pinyin": "tígāo", "english": "to raise; to improve", "level": 3, "type": "v"},
  {"chinese": "同意", "pinyin": "tóngyì", "english": "to agree", "level": 3, "type": "v"},
  {"chinese": "完成", "pinyin": "wánchéng", "english": "to complete", "level": 3, "type": "v"},
  {"chinese": "忘记", "pinyin": "wàngjì", "english": "to forget", "level": 3, "type": "v"},
  {"chinese": "像", "pinyin": "xiàng", "english": "to resemble; like", "level": 3, "type": "v"},
  {"chinese": "相信", "pinyin": "xiāngxìn", "english": "to believe (that)", "level": 3, "type": "v"},
  {"chinese": "洗澡", "pinyin": "xǐzǎo", "english": "to bathe, to take a shower", "level": 3, "type": "v"},
  {"chinese": "学习", "pinyin": "xuéxí", "english": "to learn; to study", "level": 3, "type": "v"},
  {"chinese": "需要", "pinyin": "xūyào", "english": "to need", "level": 3, "type": "v"},
  {"chinese": "以为", "pinyin": "yǐwéi", "english": "to (mistakenly) think (that)", "level": 3, "type": "v"},
  {"chinese": "用", "pinyin": "yòng", "english": "to use", "level": 3, "type": "v"},
  {"chinese": "遇到", "pinyin": "yùdào", "english": "to run into, to come across", "level": 3, "type": "v"},
  {"chinese": "再见", "pinyin": "zàijiàn", "english": "goodbye, see you later", "level": 3, "type": "v"},
  {"chinese": "站", "pinyin": "zhàn", "english": "to stand; station, stop", "level": 3, "type": "v"},
  {"chinese": "长", "pinyin": "zhǎng", "english": "to grow", "level": 3, "type": "v"},
  {"chinese": "照顾", "pinyin": "zhàogu", "english": "to take care of", "level": 3, "type": "v"},
  {"chinese": "祝", "pinyin": "zhù", "english": "to wish", "level": 3, "type": "v"},
  {"chinese": "注意", "pinyin": "zhùyì", "english": "to pay attention", "level": 3, "type": "v"},
  {"chinese": "长", "pinyin": "cháng", "english": "long", "level": 3, "type": "adj"},
  {"chinese": "安全", "pinyin": "ānquán", "english": "safe; safety", "level": 4, "type": "adj"},
  {"chinese": "棒", "pinyin": "bàng", "english": "great", "level": 4, "type": "adj"},
  {"chinese": "笨", "pinyin": "bèn", "english": "stupid", "level": 4, "type": "adj"},
  {"chinese": "成功", "pinyin": "chénggōng", "english": "successful; success", "level": 4, "type": "adj"},
  {"chinese": "诚实", "pinyin": "chéngshí", "english": "honest", "level": 4, "type": "adj"},
  {"chinese": "粗心", "pinyin": "cūxīn", "english": "careless, thoughtless", "level": 4, "type": "adj"},
  {"chinese": "得意", "pinyin": "déyì", "english": "proud of oneself; pleased; complacent", "level": 4, "type": "adj"},
  {"chinese": "低", "pinyin": "dī", "english": "low", "level": 4, "type": "adj"},
  {"chinese": "烦恼", "pinyin": "fánnǎo", "english": "annoyances, pains, troubling matters", "level": 4, "type": "n"},
  {"chinese": "丰富", "pinyin": "fēngfù", "english": "abundant; to enrich", "level": 4, "type": "adj"},
  {"chinese": "富", "pinyin": "fù", "english": "rich", "level": 4, "type": "adj"},
  {"chinese": "复杂", "pinyin": "fùzá", "english": "complicated, complex", "level": 4, "type": "adj"},
  {"chinese": "共同", "pinyin": "gòngtóng", "english": "joint, in common", "level": 4, "type": "adj"},
  {"chinese": "合格", "pinyin": "hégé", "english": "qualified, up to standard; to meet standard", "level": 4, "type": "adj"},
  {"chinese": "合适", "pinyin": "héshì", "english": "suitable", "level": 4, "type": "adj"},
  {"chinese": "厚", "pinyin": "hòu", "english": "thick, deep", "level": 4, "type": "adj"},
  {"chinese": "火", "pinyin": "huǒ", "english": "popular, hot", "level": 4, "type": "adj"},
  {"chinese": "活泼", "pinyin": "huópo", "english": "lively", "level": 4, "type": "adj"},
  {"chinese": "假", "pinyin": "jiǎ", "english": "fake", "level": 4, "type": "adj"},
  {"chinese": "骄傲", "pinyin": "jiāoào", "english": "proud", "level": 4, "type": "adj"},
  {"chinese": "激动", "pinyin": "jīdòng", "english": "excited", "level": 4, "type": "adj"},
  {"chinese": "积极", "pinyin": "jījí", "english": "active; positive", "level": 4, "type": "adj"},
  {"chinese": "精彩", "pinyin": "jīngcǎi", "english": "spectacular, wonderful", "level": 4, "type": "adj"},
  {"chinese": "紧张", "pinyin": "jǐnzhāng", "english": "nervous, tense; strained", "level": 4, "type": "adj"},
  {"chinese": "开心", "pinyin": "kāixīn", "english": "happy", "level": 4, "type": "adj"},
  {"chinese": "可怜", "pinyin": "kělián", "english": "pitiful, poor", "level": 4, "type": "adj"},
  {"chinese": "可惜", "pinyin": "kěxī", "english": "such a shame, unfortunately", "level": 4, "type": "adj"},
  {"chinese": "空", "pinyin": "kōng", "english": "empty", "level": 4, "type": "adj"},
  {"chinese": "苦", "pinyin": "kǔ", "english": "bitter, hardship", "level": 4, "type": "adj"},
  {"chinese": "困", "pinyin": "kùn", "english": "sleepy", "level": 4, "type": "adj"},
  {"chinese": "辣", "pinyin": "là", "english": "spicy", "level": 4, "type": "adj"},
  {"chinese": "懒", "pinyin": "lǎn", "english": "lazy", "level": 4, "type": "adj"},
  {"chinese": "浪漫", "pinyin": "làngmàn", "english": "romantic", "level": 4, "type": "adj"},
  {"chinese": "冷静", "pinyin": "lěngjìng", "english": "calm; cool-headed", "level": 4, "type": "adj"},
  {"chinese": "凉快", "pinyin": "liángkuai", "english": "cool (temperature)", "level": 4, "type": "adj"},
  {"chinese": "厉害", "pinyin": "lìhai", "english": "impressive, awesome; tremendous", "level": 4, "type": "adj"},
  {"chinese": "礼貌", "pinyin": "lǐmào", "english": "polite; politeness, manners", "level": 4, "type": "adj"},
  {"chinese": "流利", "pinyin": "liúlì", "english": "fluent", "level": 4, "type": "adj"},
  {"chinese": "乱", "pinyin": "luàn", "english": "chaotic, messy, disorganized", "level": 4, "type": "adj"},
  {"chinese": "麻烦", "pinyin": "máfan", "english": "troublesome; hassle, trouble; to trouble someone", "level": 4, "type": "adj"},
  {"chinese": "马虎", "pinyin": "mǎhu", "english": "careless", "level": 4, "type": "adj"},
  {"chinese": "美丽", "pinyin": "měilì", "english": "beautiful", "level": 4, "type": "adj"},
  {"chinese": "免费", "pinyin": "miǎnfèi", "english": "free; to be free of charge", "level": 4, "type": "adj"},
  {"chinese": "难受", "pinyin": "nánshòu", "english": "to feel unwell; to suffer pain; difficult to bear", "level": 4, "type": "adj"},
  {"chinese": "暖", "pinyin": "nuǎn", "english": "warm", "level": 4, "type": "adj"},
  {"chinese": "暖和", "pinyin": "nuǎnhuo", "english": "warm", "level": 4, "type": "adj"},
  {"chinese": "破", "pinyin": "pò", "english": "worn out, lousy; to break", "level": 4, "type": "adj"},
  {"chinese": "普遍", "pinyin": "pǔbiàn", "english": "universal; general; widespread; common", "level": 4, "type": "adj"},
  {"chinese": "轻", "pinyin": "qīng", "english": "light, easy, gentle, soft", "level": 4, "type": "adj"},
  {"chinese": "轻松", "pinyin": "qīngsōng", "english": "gentle, relaxed", "level": 4, "type": "adj"},
  {"chinese": "穷", "pinyin": "qióng", "english": "poor", "level": 4, "type": "adj"},
  {"chinese": "热闹", "pinyin": "rènao", "english": "bustling with noise; lively", "level": 4, "type": "adj"},
  {"chinese": "伤心", "pinyin": "shāngxīn", "english": "sad", "level": 4, "type": "adj"},
  {"chinese": "深", "pinyin": "shēn", "english": "deep", "level": 4, "type": "adj"},
  {"chinese": "失望", "pinyin": "shīwàng", "english": "disappointed; to be disappointed", "level": 4, "type": "adj"},
  {"chinese": "帅", "pinyin": "shuài", "english": "handsome", "level": 4, "type": "adj"},
  {"chinese": "顺利", "pinyin": "shùnlì", "english": "smooth; smoothly", "level": 4, "type": "adj"},
  {"chinese": "死", "pinyin": "sǐ", "english": "rigid, inflexible; to die", "level": 4, "type": "adj"},
  {"chinese": "酸", "pinyin": "suān", "english": "sour; sore; acid", "level": 4, "type": "adj"},
  {"chinese": "随便", "pinyin": "suíbiàn", "english": "as one pleases", "level": 4, "type": "adj"},
  {"chinese": "所有", "pinyin": "suǒyǒu", "english": "all", "level": 4, "type": "det"},
  {"chinese": "危险", "pinyin": "wēixiǎn", "english": "dangerous; danger", "level": 4, "type": "adj"},
  {"chinese": "无聊", "pinyin": "wúliáo", "english": "boring; bored", "level": 4, "type": "adj"},
  {"chinese": "咸", "pinyin": "xián", "english": "salty", "level": 4, "type": "adj"},
  {"chinese": "香", "pinyin": "xiāng", "english": "fragrant, good-smelling", "level": 4, "type": "adj"},
  {"chinese": "相同", "pinyin": "xiāngtóng", "english": "same, identical", "level": 4, "type": "adj"},
  {"chinese": "详细", "pinyin": "xiángxì", "english": "detailed", "level": 4, "type": "adj"},
  {"chinese": "兴奋", "pinyin": "xīngfèn", "english": "excited", "level": 4, "type": "adj"},
  {"chinese": "幸福", "pinyin": "xìngfú", "english": "happy (fairytale sense); happiness", "level": 4, "type": "adj"},
  {"chinese": "辛苦", "pinyin": "xīnkǔ", "english": "toilsome, hard work", "level": 4, "type": "adj"},
  {"chinese": "严格", "pinyin": "yángé", "english": "strict", "level": 4, "type": "adj"},
  {"chinese": "阳光", "pinyin": "yángguāng", "english": "sunshine", "level": 4, "type": "n"},
  {"chinese": "严重", "pinyin": "yánzhòng", "english": "serious", "level": 4, "type": "adj"},
  {"chinese": "勇敢", "pinyin": "yǒnggǎn", "english": "brave", "level": 4, "type": "adj"},
  {"chinese": "友好", "pinyin": "yǒuhǎo", "english": "friendly", "level": 4, "type": "adj"},
  {"chinese": "幽默", "pinyin": "yōumò", "english": "humorous", "level": 4, "type": "adj"},
  {"chinese": "有趣", "pinyin": "yǒuqù", "english": "interesting, amusing", "level": 4, "type": "adj"},
  {"chinese": "优秀", "pinyin": "yōuxiù", "english": "outstanding, excellent", "level": 4, "type": "adj"},
  {"chinese": "原来", "pinyin": "yuánlái", "english": "formerly, original", "level": 4, "type": "adv"},
  {"chinese": "愉快", "pinyin": "yúkuài", "english": "pleasant, happy", "level": 4, "type": "adj"},
  {"chinese": "脏", "pinyin": "zāng", "english": "dirty", "level": 4, "type": "adj"},
  {"chinese": "正常", "pinyin": "zhèngcháng", "english": "normal", "level": 4, "type": "adj"},
  {"chinese": "正确", "pinyin": "zhèngquè", "english": "correct, right", "level": 4, "type": "adj"},
  {"chinese": "正式", "pinyin": "zhèngshì", "english": "formal", "level": 4, "type": "adj"},
  {"chinese": "真正", "pinyin": "zhēnzhèng", "english": "real, true", "level": 4, "type": "adj"},
  {"chinese": "直接", "pinyin": "zhíjiē", "english": "directly", "level": 4, "type": "adv"},
  {"chinese": "重", "pinyin": "zhòng", "english": "heavy; strong (accent, scent, flavor)", "level": 4, "type": "adj"},
  {"chinese": "专业", "pinyin": "zhuānyè", "english": "professional; specialty, major", "level": 4, "type": "adj"},
  {"chinese": "著名", "pinyin": "zhùmíng", "english": "famous", "level": 4, "type": "adj"},
  {"chinese": "准确", "pinyin": "zhǔnquè", "english": "accurate, precise", "level": 4, "type": "adj"},
  {"chinese": "准时", "pinyin": "zhǔnshí", "english": "on time; punctual", "level": 4, "type": "adj"},
  {"chinese": "仔细", "pinyin": "zǐxì", "english": "careful", "level": 4, "type": "adj"},
  {"chinese": "自信", "pinyin": "zìxìn", "english": "to be self-confident", "level": 4, "type": "adj"},
  {"chinese": "别", "pinyin": "bié", "english": "do not (do something)", "level": 4, "type": "adv"},
  {"chinese": "按时", "pinyin": "ànshí", "english": "on time", "level": 4, "type": "adv"},
  {"chinese": "本来", "pinyin": "běnlái", "english": "originally", "level": 4, "type": "adv"},
  {"chinese": "差不多", "pinyin": "chàbuduō", "english": "more or less, almost", "level": 4, "type": "adv"},
  {"chinese": "重新", "pinyin": "chóngxīn", "english": "all over again", "level": 4, "type": "adv"},
  {"chinese": "从来", "pinyin": "cónglái", "english": "always; never (in negative sentences)", "level": 4, "type": "adv"},
  {"chinese": "大概", "pinyin": "dàgài", "english": "roughly; probably; approximate", "level": 4, "type": "adv"},
  {"chinese": "倒", "pinyin": "dào", "english": "yet, actually (indicates contrast)", "level": 4, "type": "adv"},
  {"chinese": "到处", "pinyin": "dàochù", "english": "everywhere", "level": 4, "type": "adv"},
  {"chinese": "到底", "pinyin": "dàodǐ", "english": "after all", "level": 4, "type": "adv"},
  {"chinese": "大约", "pinyin": "dàyuē", "english": "approximately; about", "level": 4, "type": "adv"},
  {"chinese": "刚", "pinyin": "gāng", "english": "just (did something)", "level": 4, "type": "adv"},
  {"chinese": "光", "pinyin": "guāng", "english": "only, merely", "level": 4, "type": "adv"},
  {"chinese": "故意", "pinyin": "gùyì", "english": "on purpose, intentional", "level": 4, "type": "adv"},
  {"chinese": "好像", "pinyin": "hǎoxiàng", "english": "to seem like; to seem to be", "level": 4, "type": "adv"},
  {"chinese": "互相", "pinyin": "hùxiāng", "english": "mutually", "level": 4, "type": "adv"},
  {"chinese": "接着", "pinyin": "jiēzhe", "english": "to continue doing; next", "level": 4, "type": "adv"},
  {"chinese": "竟然", "pinyin": "jìngrán", "english": "unexpectedly", "level": 4, "type": "adv"},
  {"chinese": "及时", "pinyin": "jíshí", "english": "in time; promptly", "level": 4, "type": "adv"},
  {"chinese": "究竟", "pinyin": "jiūjìng", "english": "after all, finally", "level": 4, "type": "adv"},
  {"chinese": "肯定", "pinyin": "kěndìng", "english": "certainly", "level": 4, "type": "adv"},
  {"chinese": "恐怕", "pinyin": "kǒngpà", "english": "I'm afraid that...", "level": 4, "type": "adv"},
  {"chinese": "难道", "pinyin": "nándào", "english": "could it be that...? [rhetorical]", "level": 4, "type": "part"},
  {"chinese": "偶尔", "pinyin": "ǒu'ěr", "english": "occasionally", "level": 4, "type": "adv"},
  {"chinese": "千万", "pinyin": "qiānwàn", "english": "one must by all means (do something)", "level": 4, "type": "adv"},
  {"chinese": "却", "pinyin": "què", "english": "however, yet", "level": 4, "type": "adv"},
  {"chinese": "确实", "pinyin": "quèshí", "english": "indeed", "level": 4, "type": "adv"},
  {"chinese": "仍然", "pinyin": "réngrán", "english": "still, yet", "level": 4, "type": "adv"},
  {"chinese": "稍微", "pinyin": "shāowēi", "english": "a little bit", "level": 4, "type": "adv"},
  {"chinese": "十分", "pinyin": "shífēn", "english": "very, extremely", "level": 4, "type": "adv"},
  {"chinese": "是否", "pinyin": "shìfǒu", "english": "whether or not", "level": 4, "type": "conj"},
  {"chinese": "实在", "pinyin": "shízài", "english": "actually", "level": 4, "type": "adv"},
  {"chinese": "顺便", "pinyin": "shùnbiàn", "english": "while we're at it...", "level": 4, "type": "adv"},
  {"chinese": "挺", "pinyin": "tǐng", "english": "rather; quite", "level": 4, "type": "adv"},
  {"chinese": "提前", "pinyin": "tíqián", "english": "in advance; to move up the date", "level": 4, "type": "adv"},
  {"chinese": "往往", "pinyin": "wǎngwǎng", "english": "often; frequently", "level": 4, "type": "adv"},
  {"chinese": "完全", "pinyin": "wánquán", "english": "completely; totally", "level": 4, "type": "adv"},
  {"chinese": "也许", "pinyin": "yěxǔ", "english": "perhaps, maybe", "level": 4, "type": "adv"},
  {"chinese": "永远", "pinyin": "yǒngyuǎn", "english": "forever, eternal", "level": 4, "type": "adv"},
  {"chinese": "尤其", "pinyin": "yóuqí", "english": "especially", "level": 4, "type": "adv"},
  {"chinese": "正好", "pinyin": "zhènghǎo", "english": "just happen to, by chance", "level": 4, "type": "adv"},
  {"chinese": "只好", "pinyin": "zhǐhǎo", "english": "to have to, no choice but to", "level": 4, "type": "adv"},
  {"chinese": "至少", "pinyin": "zhìshǎo", "english": "at least", "level": 4, "type": "adv"},
  {"chinese": "专门", "pinyin": "zhuānmén", "english": "especially (for), specialized", "level": 4, "type": "adv"},
  {"chinese": "自然", "pinyin": "zìrán", "english": "naturally, certainly; natural", "level": 4, "type": "adv"},
  {"chinese": "最好", "pinyin": "zuìhǎo", "english": "(you) had better (do something)", "level": 4, "type": "adv"},
  {"chinese": "得", "pinyin": "děi", "english": "must, have to", "level": 4, "type": "v"},
  {"chinese": "但是", "pinyin": "dànshì", "english": "but", "level": 4, "type": "conj"},
  {"chinese": "并且", "pinyin": "bìngqiě", "english": "and besides, moreover", "level": 4, "type": "conj"},
  {"chinese": "不管", "pinyin": "bùguǎn", "english": "no matter (what, how)", "level": 4, "type": "conj"},
  {"chinese": "不过", "pinyin": "bùguò", "english": "but, yet", "level": 4, "type": "conj"},
  {"chinese": "不仅", "pinyin": "bùjǐn", "english": "not only... but also", "level": 4, "type": "conj"},
  {"chinese": "而", "pinyin": "ér", "english": "but (not), yet (not) [contrast]", "level": 4, "type": "conj"},
  {"chinese": "否则", "pinyin": "fǒuzé", "english": "otherwise, or else", "level": 4, "type": "conj"},
  {"chinese": "尽管", "pinyin": "jǐnguǎn", "english": "although", "level": 4, "type": "conj"},
  {"chinese": "既然", "pinyin": "jìrán", "english": "since..., this being the case", "level": 4, "type": "conj"},
  {"chinese": "即使", "pinyin": "jíshǐ", "english": "even if; even though", "level": 4, "type": "conj"},
  {"chinese": "可是", "pinyin": "kěshì", "english": "but", "level": 4, "type": "conj"},
  {"chinese": "另外", "pinyin": "lìngwài", "english": "in addition", "level": 4, "type": "conj"},
  {"chinese": "然而", "pinyin": "ránér", "english": "however, but", "level": 4, "type": "conj"},
  {"chinese": "甚至", "pinyin": "shènzhì", "english": "even", "level": 4, "type": "adv"},
  {"chinese": "同时", "pinyin": "tóngshí", "english": "at the same time", "level": 4, "type": "conj"},
  {"chinese": "无论", "pinyin": "wúlùn", "english": "regardless of", "level": 4, "type": "conj"},
  {"chinese": "相反", "pinyin": "xiāngfǎn", "english": "opposite", "level": 4, "type": "adj"},
  {"chinese": "要是", "pinyin": "yàoshi", "english": "if", "level": 4, "type": "conj"},
  {"chinese": "因此", "pinyin": "yīncǐ", "english": "therefore, thus, as a result", "level": 4, "type": "conj"},
  {"chinese": "由于", "pinyin": "yóuyú", "english": "since; because", "level": 4, "type": "conj"},
  {"chinese": "于是", "pinyin": "yúshì", "english": "thereupon", "level": 4, "type": "conj"},
  {"chinese": "只要", "pinyin": "zhǐyào", "english": "if only; so long as", "level": 4, "type": "conj"},
  {"chinese": "倍", "pinyin": "bèi", "english": "times (the amount), -fold", "level": 4, "type": "mw"},
  {"chinese": "遍", "pinyin": "biàn", "english": "[measure word for counting completed actions]", "level": 4, "type": "mw"},
  {"chinese": "场", "pinyin": "chǎng", "english": "[measure word for events]", "level": 4, "type": "mw"},
  {"chinese": "份", "pinyin": "fèn", "english": "portion, copy, set [measure word]", "level": 4, "type": "mw"},
  {"chinese": "公里", "pinyin": "gōnglǐ", "english": "kilometer", "level": 4, "type": "num"},
  {"chinese": "节", "pinyin": "jié", "english": "section, length; festival, holiday", "level": 4, "type": "n"},
  {"chinese": "棵", "pinyin": "kē", "english": "[measure word for trees/plants]", "level": 4, "type": "mw"},
  {"chinese": "秒", "pinyin": "miǎo", "english": "second (time unit)", "level": 4, "type": "num"},
  {"chinese": "篇", "pinyin": "piān", "english": "[measure word for essays/written pieces]", "level": 4, "type": "mw"},
  {"chinese": "台", "pinyin": "tái", "english": "[measure word for computers]", "level": 4, "type": "mw"},
  {"chinese": "趟", "pinyin": "tàng", "english": "[measure word for round trips]", "level": 4, "type": "mw"},
  {"chinese": "页", "pinyin": "yè", "english": "page", "level": 4, "type": "num"},
  {"chinese": "座", "pinyin": "zuò", "english": "[measure word for bridges, mountains, buildings]", "level": 4, "type": "mw"},
  {"chinese": "爱情", "pinyin": "àiqíng", "english": "love (romantic)", "level": 4, "type": "n"},
  {"chinese": "安排", "pinyin": "ānpái", "english": "arrangement; to arrange", "level": 4, "type": "v"},
  {"chinese": "包子", "pinyin": "bāozi", "english": "steamed (stuffed) bun", "level": 4, "type": "n"},
  {"chinese": "表格", "pinyin": "biǎogé", "english": "form, table", "level": 4, "type": "n"},
  {"chinese": "表演", "pinyin": "biǎoyǎn", "english": "play; show; performance; to perform; to act", "level": 4, "type": "v"},
  {"chinese": "标准", "pinyin": "biāozhǔn", "english": "standard", "level": 4, "type": "n"},
  {"chinese": "饼干", "pinyin": "bǐnggān", "english": "cracker, cookie", "level": 4, "type": "n"},
  {"chinese": "博士", "pinyin": "bóshì", "english": "Ph.D.; doctor", "level": 4, "type": "n"},
  {"chinese": "部分", "pinyin": "bùfen", "english": "part, section", "level": 4, "type": "n"},
  {"chinese": "材料", "pinyin": "cáiliào", "english": "material", "level": 4, "type": "n"},
  {"chinese": "餐厅", "pinyin": "cāntīng", "english": "restaurant", "level": 4, "type": "n"},
  {"chinese": "厕所", "pinyin": "cèsuǒ", "english": "toilet, restroom", "level": 4, "type": "n"},
  {"chinese": "长城", "pinyin": "Chángchéng", "english": "the Great Wall of China", "level": 4, "type": "n"},
  {"chinese": "长江", "pinyin": "Cháng Jiāng", "english": "the Yangtze River", "level": 4, "type": "n"},
  {"chinese": "窗户", "pinyin": "chuānghu", "english": "window", "level": 4, "type": "n"},
  {"chinese": "错误", "pinyin": "cuòwù", "english": "error, mistake; mistaken", "level": 4, "type": "n"},
  {"chinese": "答案", "pinyin": "dá'àn", "english": "answer", "level": 4, "type": "n"},
  {"chinese": "大夫", "pinyin": "dàifu", "english": "doctor", "level": 4, "type": "n"},
  {"chinese": "当时", "pinyin": "dāngshí", "english": "at that time", "level": 4, "type": "n"},
  {"chinese": "刀", "pinyin": "dāo", "english": "knife", "level": 4, "type": "n"},
  {"chinese": "导游", "pinyin": "dǎoyóu", "english": "tour guide", "level": 4, "type": "n"},
  {"chinese": "大使馆", "pinyin": "dàshǐguǎn", "english": "embassy", "level": 4, "type": "n"},
  {"chinese": "登机牌", "pinyin": "dēngjīpái", "english": "boarding pass", "level": 4, "type": "n"},
  {"chinese": "底", "pinyin": "dǐ", "english": "bottom, base", "level": 4, "type": "n"},
  {"chinese": "地点", "pinyin": "dìdiǎn", "english": "site, location", "level": 4, "type": "n"},
  {"chinese": "地球", "pinyin": "dìqiú", "english": "the Earth", "level": 4, "type": "n"},
  {"chinese": "地址", "pinyin": "dìzhǐ", "english": "address", "level": 4, "type": "n"},
  {"chinese": "动作", "pinyin": "dòngzuò", "english": "movement", "level": 4, "type": "n"},
  {"chinese": "短信", "pinyin": "duǎnxìn", "english": "text message", "level": 4, "type": "n"},
  {"chinese": "对面", "pinyin": "duìmiàn", "english": "opposite to, across from", "level": 4, "type": "n"},
  {"chinese": "肚子", "pinyin": "dùzi", "english": "belly, abdomen", "level": 4, "type": "n"},
  {"chinese": "儿童", "pinyin": "értóng", "english": "children", "level": 4, "type": "n"},
  {"chinese": "法律", "pinyin": "fǎlǜ", "english": "law", "level": 4, "type": "n"},
  {"chinese": "房东", "pinyin": "fángdōng", "english": "landlord", "level": 4, "type": "n"},
  {"chinese": "方法", "pinyin": "fāngfǎ", "english": "method", "level": 4, "type": "n"},
  {"chinese": "方面", "pinyin": "fāngmiàn", "english": "aspect", "level": 4, "type": "n"},
  {"chinese": "方向", "pinyin": "fāngxiàng", "english": "direction", "level": 4, "type": "n"},
  {"chinese": "翻译", "pinyin": "fānyì", "english": "translation, translator; to translate", "level": 4, "type": "n"},
  {"chinese": "父亲", "pinyin": "fùqin", "english": "father", "level": 4, "type": "n"},
  {"chinese": "感觉", "pinyin": "gǎnjué", "english": "sense perception; feeling", "level": 4, "type": "n"},
  {"chinese": "感情", "pinyin": "gǎnqíng", "english": "deep affection; relationship", "level": 4, "type": "n"},
  {"chinese": "高速公路", "pinyin": "gāosù gōnglù", "english": "expressway", "level": 4, "type": "n"},
  {"chinese": "胳膊", "pinyin": "gēbo", "english": "arm", "level": 4, "type": "n"},
  {"chinese": "功夫", "pinyin": "gōngfu", "english": "kung fu; effort", "level": 4, "type": "n"},
  {"chinese": "工资", "pinyin": "gōngzī", "english": "wages, pay", "level": 4, "type": "n"},
  {"chinese": "广告", "pinyin": "guǎnggào", "english": "advertisement", "level": 4, "type": "n"},
  {"chinese": "关键", "pinyin": "guānjiàn", "english": "key (issue)", "level": 4, "type": "n"},
  {"chinese": "观众", "pinyin": "guānzhòng", "english": "audience", "level": 4, "type": "n"},
  {"chinese": "顾客", "pinyin": "gùkè", "english": "customer", "level": 4, "type": "n"},
  {"chinese": "过程", "pinyin": "guòchéng", "english": "course; process", "level": 4, "type": "n"},
  {"chinese": "国籍", "pinyin": "guójí", "english": "nationality", "level": 4, "type": "n"},
  {"chinese": "国际", "pinyin": "guójì", "english": "international", "level": 4, "type": "adj"},
  {"chinese": "海洋", "pinyin": "hǎiyáng", "english": "ocean", "level": 4, "type": "n"},
  {"chinese": "汗", "pinyin": "hàn", "english": "sweat, perspiration", "level": 4, "type": "n"},
  {"chinese": "航班", "pinyin": "hángbān", "english": "flight", "level": 4, "type": "n"},
  {"chinese": "寒假", "pinyin": "hánjià", "english": "winter vacation", "level": 4, "type": "n"},
  {"chinese": "好处", "pinyin": "hǎochù", "english": "benefit", "level": 4, "type": "n"},
  {"chinese": "号码", "pinyin": "hàomǎ", "english": "number", "level": 4, "type": "n"},
  {"chinese": "盒子", "pinyin": "hézi", "english": "box, case", "level": 4, "type": "n"},
  {"chinese": "互联网", "pinyin": "Hùliánwǎng", "english": "the Internet", "level": 4, "type": "n"},
  {"chinese": "活动", "pinyin": "huódòng", "english": "activity, event", "level": 4, "type": "n"},
  {"chinese": "护士", "pinyin": "hùshi", "english": "nurse", "level": 4, "type": "n"},
  {"chinese": "价格", "pinyin": "jiàgé", "english": "price", "level": 4, "type": "n"},
  {"chinese": "家具", "pinyin": "jiājù", "english": "furniture", "level": 4, "type": "n"},
  {"chinese": "奖金", "pinyin": "jiǎngjīn", "english": "bonus", "level": 4, "type": "n"},
  {"chinese": "将来", "pinyin": "jiānglái", "english": "in the future", "level": 4, "type": "n"},
  {"chinese": "郊区", "pinyin": "jiāoqū", "english": "suburbs", "level": 4, "type": "n"},
  {"chinese": "教授", "pinyin": "jiàoshòu", "english": "professor", "level": 4, "type": "n"},
  {"chinese": "交通", "pinyin": "jiāotōng", "english": "traffic", "level": 4, "type": "n"},
  {"chinese": "饺子", "pinyin": "jiǎozi", "english": "dumpling", "level": 4, "type": "n"},
  {"chinese": "加油站", "pinyin": "jiāyóuzhàn", "english": "gas station", "level": 4, "type": "n"},
  {"chinese": "基础", "pinyin": "jīchǔ", "english": "base; foundation", "level": 4, "type": "n"},
  {"chinese": "结果", "pinyin": "jiéguǒ", "english": "result; in the end", "level": 4, "type": "n"},
  {"chinese": "计划", "pinyin": "jìhuà", "english": "plan; project; to plan", "level": 4, "type": "n"},
  {"chinese": "警察", "pinyin": "jǐngchá", "english": "police", "level": 4, "type": "n"},
  {"chinese": "经济", "pinyin": "jīngjì", "english": "economy", "level": 4, "type": "n"},
  {"chinese": "京剧", "pinyin": "jīngjù", "english": "Beijing opera", "level": 4, "type": "n"},
  {"chinese": "景色", "pinyin": "jǐngsè", "english": "scenery, landscape", "level": 4, "type": "n"},
  {"chinese": "经验", "pinyin": "jīngyàn", "english": "accumulated experience", "level": 4, "type": "n"},
  {"chinese": "技术", "pinyin": "jìshù", "english": "technology; skill", "level": 4, "type": "n"},
  {"chinese": "记者", "pinyin": "jìzhě", "english": "journalist", "level": 4, "type": "n"},
  {"chinese": "距离", "pinyin": "jùlí", "english": "distance", "level": 4, "type": "n"},
  {"chinese": "看法", "pinyin": "kànfǎ", "english": "point of view", "level": 4, "type": "n"},
  {"chinese": "烤鸭", "pinyin": "kǎoyā", "english": "roast duck", "level": 4, "type": "n"},
  {"chinese": "客厅", "pinyin": "kètīng", "english": "living room", "level": 4, "type": "n"},
  {"chinese": "科学", "pinyin": "kēxué", "english": "science; scientific", "level": 4, "type": "n"},
  {"chinese": "空气", "pinyin": "kōngqì", "english": "air", "level": 4, "type": "n"},
  {"chinese": "空儿", "pinyin": "kòngr", "english": "free time", "level": 4, "type": "n"},
  {"chinese": "矿泉水", "pinyin": "kuàngquánshuǐ", "english": "mineral spring water", "level": 4, "type": "n"},
  {"chinese": "困难", "pinyin": "kùnnan", "english": "difficulty", "level": 4, "type": "n"},
  {"chinese": "垃圾桶", "pinyin": "lājītǒng", "english": "trash can", "level": 4, "type": "n"},
  {"chinese": "老虎", "pinyin": "lǎohǔ", "english": "tiger", "level": 4, "type": "n"},
  {"chinese": "礼拜天", "pinyin": "lǐbàitiān", "english": "Sunday", "level": 4, "type": "n"},
  {"chinese": "零钱", "pinyin": "língqián", "english": "small change", "level": 4, "type": "n"},
  {"chinese": "力气", "pinyin": "lìqi", "english": "strength", "level": 4, "type": "n"},
  {"chinese": "理想", "pinyin": "lǐxiǎng", "english": "ideal", "level": 4, "type": "n"},
  {"chinese": "律师", "pinyin": "lǜshī", "english": "lawyer", "level": 4, "type": "n"},
  {"chinese": "毛", "pinyin": "máo", "english": "hair, fur", "level": 4, "type": "n"},
  {"chinese": "毛巾", "pinyin": "máojīn", "english": "towel", "level": 4, "type": "n"},
  {"chinese": "梦", "pinyin": "mèng", "english": "dream", "level": 4, "type": "n"},
  {"chinese": "密码", "pinyin": "mìmǎ", "english": "password, PIN", "level": 4, "type": "n"},
  {"chinese": "民族", "pinyin": "mínzú", "english": "nationality, ethnic group", "level": 4, "type": "n"},
  {"chinese": "目的", "pinyin": "mùdì", "english": "purpose, aim, goal", "level": 4, "type": "n"},
  {"chinese": "母亲", "pinyin": "mǔqīn", "english": "mother", "level": 4, "type": "n"},
  {"chinese": "耐心", "pinyin": "nàixīn", "english": "patience", "level": 4, "type": "n"},
  {"chinese": "内", "pinyin": "nèi", "english": "in, within", "level": 4, "type": "prep"},
  {"chinese": "内容", "pinyin": "nèiróng", "english": "content", "level": 4, "type": "n"},
  {"chinese": "能力", "pinyin": "nénglì", "english": "ability", "level": 4, "type": "n"},
  {"chinese": "年龄", "pinyin": "niánlíng", "english": "age", "level": 4, "type": "n"},
  {"chinese": "皮肤", "pinyin": "pífū", "english": "skin", "level": 4, "type": "n"},
  {"chinese": "乒乓球", "pinyin": "pīngpāngqiú", "english": "table tennis", "level": 4, "type": "n"},
  {"chinese": "平时", "pinyin": "píngshí", "english": "usually", "level": 4, "type": "adv"},
  {"chinese": "脾气", "pinyin": "píqi", "english": "temper, temperament", "level": 4, "type": "n"},
  {"chinese": "签证", "pinyin": "qiānzhèng", "english": "visa", "level": 4, "type": "n"},
  {"chinese": "桥", "pinyin": "qiáo", "english": "bridge", "level": 4, "type": "n"},
  {"chinese": "巧克力", "pinyin": "qiǎokèlì", "english": "chocolate", "level": 4, "type": "n"},
  {"chinese": "气候", "pinyin": "qìhòu", "english": "climate", "level": 4, "type": "n"},
  {"chinese": "情况", "pinyin": "qíngkuàng", "english": "situation, circumstances", "level": 4, "type": "n"},
  {"chinese": "亲戚", "pinyin": "qīnqi", "english": "relatives", "level": 4, "type": "n"},
  {"chinese": "其中", "pinyin": "qízhōng", "english": "among", "level": 4, "type": "prep"},
  {"chinese": "全部", "pinyin": "quánbù", "english": "whole, entire", "level": 4, "type": "det"},
  {"chinese": "区别", "pinyin": "qūbié", "english": "difference", "level": 4, "type": "n"},
  {"chinese": "缺点", "pinyin": "quēdiǎn", "english": "weak point, weakness", "level": 4, "type": "n"},
  {"chinese": "任务", "pinyin": "rènwu", "english": "task, assignment", "level": 4, "type": "n"},
  {"chinese": "日记", "pinyin": "rìjì", "english": "diary", "level": 4, "type": "n"},
  {"chinese": "入口", "pinyin": "rùkǒu", "english": "entrance", "level": 4, "type": "n"},
  {"chinese": "森林", "pinyin": "sēnlín", "english": "forest", "level": 4, "type": "n"},
  {"chinese": "沙发", "pinyin": "shāfā", "english": "sofa", "level": 4, "type": "n"},
  {"chinese": "勺子", "pinyin": "sháozi", "english": "spoon, ladle", "level": 4, "type": "n"},
  {"chinese": "社会", "pinyin": "shèhuì", "english": "society", "level": 4, "type": "n"},
  {"chinese": "省", "pinyin": "shěng", "english": "province; to save, to economize", "level": 4, "type": "n"},
  {"chinese": "生命", "pinyin": "shēngmìng", "english": "life (which you lose when you die)", "level": 4, "type": "n"},
  {"chinese": "生意", "pinyin": "shēngyi", "english": "business", "level": 4, "type": "n"},
  {"chinese": "师傅", "pinyin": "shīfu", "english": "master; qualified worker", "level": 4, "type": "n"},
  {"chinese": "实际", "pinyin": "shíjì", "english": "actual", "level": 4, "type": "adj"},
  {"chinese": "世纪", "pinyin": "shìjì", "english": "century", "level": 4, "type": "n"},
  {"chinese": "首都", "pinyin": "shǒudū", "english": "capital city", "level": 4, "type": "n"},
  {"chinese": "售货员", "pinyin": "shòuhuòyuán", "english": "salesperson", "level": 4, "type": "n"},
  {"chinese": "收入", "pinyin": "shōurù", "english": "revenue", "level": 4, "type": "n"},
  {"chinese": "数量", "pinyin": "shùliàng", "english": "amount, quantity", "level": 4, "type": "n"},
  {"chinese": "顺序", "pinyin": "shùnxù", "english": "order, sequence", "level": 4, "type": "n"},
  {"chinese": "硕士", "pinyin": "shuòshì", "english": "master's degree", "level": 4, "type": "n"},
  {"chinese": "数字", "pinyin": "shùzì", "english": "number", "level": 4, "type": "n"},
  {"chinese": "速度", "pinyin": "sùdù", "english": "speed; rate", "level": 4, "type": "n"},
  {"chinese": "塑料袋", "pinyin": "sùliàodài", "english": "plastic bag", "level": 4, "type": "n"},
  {"chinese": "孙子", "pinyin": "sūnzi", "english": "grandson", "level": 4, "type": "n"},
  {"chinese": "态度", "pinyin": "tàidu", "english": "attitude", "level": 4, "type": "n"},
  {"chinese": "汤", "pinyin": "tāng", "english": "soup, broth", "level": 4, "type": "n"},
  {"chinese": "讨论", "pinyin": "tǎolùn", "english": "discussion; to discuss", "level": 4, "type": "v"},
  {"chinese": "特点", "pinyin": "tèdiǎn", "english": "characteristic, special trait", "level": 4, "type": "n"},
  {"chinese": "条件", "pinyin": "tiáojiàn", "english": "conditions, qualifications", "level": 4, "type": "n"},
  {"chinese": "通知", "pinyin": "tōngzhī", "english": "notice; to notify", "level": 4, "type": "n"},
  {"chinese": "网球", "pinyin": "wǎngqiú", "english": "tennis", "level": 4, "type": "n"},
  {"chinese": "网站", "pinyin": "wǎngzhàn", "english": "website", "level": 4, "type": "n"},
  {"chinese": "袜子", "pinyin": "wàzi", "english": "socks", "level": 4, "type": "n"},
  {"chinese": "味道", "pinyin": "wèidào", "english": "flavor, smell, taste", "level": 4, "type": "n"},
  {"chinese": "卫生间", "pinyin": "wèishēngjiān", "english": "restroom", "level": 4, "type": "n"},
  {"chinese": "温度", "pinyin": "wēndù", "english": "temperature", "level": 4, "type": "n"},
  {"chinese": "文章", "pinyin": "wénzhāng", "english": "essay, article", "level": 4, "type": "n"},
  {"chinese": "橡皮", "pinyin": "xiàngpí", "english": "eraser", "level": 4, "type": "n"},
  {"chinese": "现金", "pinyin": "xiànjīn", "english": "cash", "level": 4, "type": "n"},
  {"chinese": "小吃", "pinyin": "xiǎochī", "english": "snack", "level": 4, "type": "n"},
  {"chinese": "效果", "pinyin": "xiàoguǒ", "english": "positive result", "level": 4, "type": "n"},
  {"chinese": "笑话", "pinyin": "xiàohuà", "english": "joke; to laugh at", "level": 4, "type": "n"},
  {"chinese": "小伙子", "pinyin": "xiǎohuǒzi", "english": "young guy", "level": 4, "type": "n"},
  {"chinese": "小说", "pinyin": "xiǎoshuō", "english": "novel", "level": 4, "type": "n"},
  {"chinese": "消息", "pinyin": "xiāoxi", "english": "news", "level": 4, "type": "n"},
  {"chinese": "西红柿", "pinyin": "xīhóngshì", "english": "tomato", "level": 4, "type": "n"},
  {"chinese": "信封", "pinyin": "xìnfēng", "english": "envelope", "level": 4, "type": "n"},
  {"chinese": "性别", "pinyin": "xìngbié", "english": "gender", "level": 4, "type": "n"},
  {"chinese": "性格", "pinyin": "xìnggé", "english": "personality, character", "level": 4, "type": "n"},
  {"chinese": "心情", "pinyin": "xīnqíng", "english": "mood", "level": 4, "type": "n"},
  {"chinese": "信息", "pinyin": "xìnxī", "english": "information; message", "level": 4, "type": "n"},
  {"chinese": "信心", "pinyin": "xìnxīn", "english": "confidence", "level": 4, "type": "n"},
  {"chinese": "学期", "pinyin": "xuéqī", "english": "semester", "level": 4, "type": "n"},
  {"chinese": "牙膏", "pinyin": "yágāo", "english": "toothpaste", "level": 4, "type": "n"},
  {"chinese": "压力", "pinyin": "yālì", "english": "pressure", "level": 4, "type": "n"},
  {"chinese": "亚洲", "pinyin": "Yàzhōu", "english": "Asia", "level": 4, "type": "n"},
  {"chinese": "盐", "pinyin": "yán", "english": "salt", "level": 4, "type": "n"},
  {"chinese": "样子", "pinyin": "yàngzi", "english": "appearance", "level": 4, "type": "n"},
  {"chinese": "演员", "pinyin": "yǎnyuán", "english": "actor or actress", "level": 4, "type": "n"},
  {"chinese": "钥匙", "pinyin": "yàoshi", "english": "key", "level": 4, "type": "n"},
  {"chinese": "叶子", "pinyin": "yèzi", "english": "leaf", "level": 4, "type": "n"},
  {"chinese": "意见", "pinyin": "yìjiàn", "english": "opinion", "level": 4, "type": "n"},
  {"chinese": "印象", "pinyin": "yìnxiàng", "english": "impression", "level": 4, "type": "n"},
  {"chinese": "艺术", "pinyin": "yìshù", "english": "art", "level": 4, "type": "n"},
  {"chinese": "优点", "pinyin": "yōudiǎn", "english": "strong point, strength", "level": 4, "type": "n"},
  {"chinese": "邮局", "pinyin": "yóujú", "english": "post office", "level": 4, "type": "n"},
  {"chinese": "友谊", "pinyin": "yǒuyì", "english": "friendship", "level": 4, "type": "n"},
  {"chinese": "原因", "pinyin": "yuányīn", "english": "cause, reason", "level": 4, "type": "n"},
  {"chinese": "语法", "pinyin": "yǔfǎ", "english": "grammar", "level": 4, "type": "n"},
  {"chinese": "羽毛球", "pinyin": "yǔmáoqiú", "english": "badminton", "level": 4, "type": "n"},
  {"chinese": "云", "pinyin": "yún", "english": "cloud", "level": 4, "type": "n"},
  {"chinese": "语言", "pinyin": "yǔyán", "english": "language", "level": 4, "type": "n"},
  {"chinese": "暂时", "pinyin": "zànshí", "english": "temporary; temporarily", "level": 4, "type": "adj"},
  {"chinese": "杂志", "pinyin": "zázhì", "english": "magazine", "level": 4, "type": "n"},
  {"chinese": "责任", "pinyin": "zérèn", "english": "responsibility", "level": 4, "type": "n"},
  {"chinese": "纸袋", "pinyin": "zhǐdài", "english": "paper bag", "level": 4, "type": "n"},
  {"chinese": "质量", "pinyin": "zhìliàng", "english": "quality", "level": 4, "type": "n"},
  {"chinese": "知识", "pinyin": "zhīshi", "english": "knowledge", "level": 4, "type": "n"},
  {"chinese": "植物", "pinyin": "zhíwù", "english": "plant", "level": 4, "type": "n"},
  {"chinese": "职业", "pinyin": "zhíyè", "english": "occupation", "level": 4, "type": "n"},
  {"chinese": "重点", "pinyin": "zhòngdiǎn", "english": "emphasis; focal point", "level": 4, "type": "n"},
  {"chinese": "周围", "pinyin": "zhōuwéi", "english": "surroundings, environment", "level": 4, "type": "n"},
  {"chinese": "主意", "pinyin": "zhúyi", "english": "idea", "level": 4, "type": "n"},
  {"chinese": "总结", "pinyin": "zǒngjié", "english": "summary; to sum up", "level": 4, "type": "v"},
  {"chinese": "作家", "pinyin": "zuòjiā", "english": "writer", "level": 4, "type": "n"},
  {"chinese": "座位", "pinyin": "zuòwèi", "english": "seat", "level": 4, "type": "n"},
  {"chinese": "左右", "pinyin": "zuǒyòu", "english": "left and right; approximately", "level": 4, "type": "prep"},
  {"chinese": "作者", "pinyin": "zuòzhě", "english": "author, writer", "level": 4, "type": "n"},
  {"chinese": "俩", "pinyin": "liǎ", "english": "two, both", "level": 4, "type": "num"},
  {"chinese": "许多", "pinyin": "xǔduō", "english": "many, numerous", "level": 4, "type": "det"},
  {"chinese": "等", "pinyin": "děng", "english": "etc.", "level": 4, "type": "part"},
  {"chinese": "呀", "pinyin": "ya", "english": "[modal particle for surprise/enthusiasm]", "level": 4, "type": "part"},
  {"chinese": "之", "pinyin": "zhī", "english": "[possessive particle, literary equivalent of 的]", "level": 4, "type": "part"},
  {"chinese": "咱们", "pinyin": "zánmen", "english": "we, us (you and I)", "level": 4, "type": "pron"},
  {"chinese": "百分之", "pinyin": "bǎifēnzhī", "english": "percent", "level": 4, "type": "part"},
  {"chinese": "不得不", "pinyin": "bùdébù", "english": "have no choice but", "level": 4, "type": "v"},
  {"chinese": "按照", "pinyin": "ànzhào", "english": "according to", "level": 4, "type": "prep"},
  {"chinese": "当", "pinyin": "dāng", "english": "at the time of", "level": 4, "type": "prep"},
  {"chinese": "对于", "pinyin": "duìyú", "english": "regarding, with regards to", "level": 4, "type": "prep"},
  {"chinese": "各", "pinyin": "gè", "english": "each, every", "level": 4, "type": "det"},
  {"chinese": "连", "pinyin": "lián", "english": "even", "level": 4, "type": "prep"},
  {"chinese": "其次", "pinyin": "qícì", "english": "next", "level": 4, "type": "adv"},
  {"chinese": "任何", "pinyin": "rènhé", "english": "any", "level": 4, "type": "det"},
  {"chinese": "首先", "pinyin": "shǒuxiān", "english": "first of all", "level": 4, "type": "adv"},
  {"chinese": "随着", "pinyin": "suízhe", "english": "along with", "level": 4, "type": "prep"},
  {"chinese": "通过", "pinyin": "tōngguò", "english": "via, by means of", "level": 4, "type": "prep"},
  {"chinese": "以", "pinyin": "yǐ", "english": "with, using, by means of", "level": 4, "type": "prep"},
  {"chinese": "一切", "pinyin": "yīqiè", "english": "everything", "level": 4, "type": "pron"},
  {"chinese": "由", "pinyin": "yóu", "english": "by way of; by", "level": 4, "type": "prep"},
  {"chinese": "与", "pinyin": "yú", "english": "with, to", "level": 4, "type": "prep"},
  {"chinese": "抱", "pinyin": "bào", "english": "to hold, to hug", "level": 4, "type": "v"},
  {"chinese": "保护", "pinyin": "bǎohù", "english": "to protect", "level": 4, "type": "v"},
  {"chinese": "报名", "pinyin": "bàomíng", "english": "to sign up (for)", "level": 4, "type": "v"},
  {"chinese": "抱歉", "pinyin": "bàoqiàn", "english": "sorry; to be apologetic", "level": 4, "type": "v"},
  {"chinese": "保证", "pinyin": "bǎozhèng", "english": "to guarantee", "level": 4, "type": "v"},
  {"chinese": "表扬", "pinyin": "biǎoyáng", "english": "to praise; to commend", "level": 4, "type": "v"},
  {"chinese": "比如", "pinyin": "bǐrú", "english": "for example", "level": 4, "type": "v"},
  {"chinese": "毕业", "pinyin": "bìyè", "english": "to graduate", "level": 4, "type": "v"},
  {"chinese": "擦", "pinyin": "cā", "english": "to wipe, to scrub, to erase", "level": 4, "type": "v"},
  {"chinese": "猜", "pinyin": "cāi", "english": "to guess", "level": 4, "type": "v"},
  {"chinese": "参观", "pinyin": "cānguān", "english": "to visit; to tour", "level": 4, "type": "v"},
  {"chinese": "尝", "pinyin": "cháng", "english": "to try (a food)", "level": 4, "type": "v"},
  {"chinese": "超过", "pinyin": "chāoguò", "english": "to surpass; to exceed", "level": 4, "type": "v"},
  {"chinese": "成为", "pinyin": "chéngwéi", "english": "to be", "level": 4, "type": "v"},
  {"chinese": "乘坐", "pinyin": "chéngzuò", "english": "to ride (in a vehicle)", "level": 4, "type": "v"},
  {"chinese": "吃惊", "pinyin": "chījīng", "english": "to be surprised", "level": 4, "type": "v"},
  {"chinese": "抽烟", "pinyin": "chōuyān", "english": "to smoke", "level": 4, "type": "v"},
  {"chinese": "传真", "pinyin": "chuánzhēn", "english": "to send by fax", "level": 4, "type": "v"},
  {"chinese": "出差", "pinyin": "chūchāi", "english": "to go on a business trip", "level": 4, "type": "v"},
  {"chinese": "出发", "pinyin": "chūfā", "english": "to depart, to set off", "level": 4, "type": "v"},
  {"chinese": "出生", "pinyin": "chūshēng", "english": "to be born", "level": 4, "type": "v"},
  {"chinese": "存", "pinyin": "cún", "english": "to save (money, files)", "level": 4, "type": "v"},
  {"chinese": "打扮", "pinyin": "dǎban", "english": "to dress up", "level": 4, "type": "v"},
  {"chinese": "戴", "pinyin": "dài", "english": "to wear (an accessory)", "level": 4, "type": "v"},
  {"chinese": "倒", "pinyin": "dǎo", "english": "to fall over", "level": 4, "type": "v"},
  {"chinese": "道歉", "pinyin": "dàoqiàn", "english": "to apologize", "level": 4, "type": "v"},
  {"chinese": "打扰", "pinyin": "dǎrǎo", "english": "to disturb, to bother", "level": 4, "type": "v"},
  {"chinese": "打印", "pinyin": "dǎyìn", "english": "to print", "level": 4, "type": "v"},
  {"chinese": "打折", "pinyin": "dǎzhé", "english": "to give a discount", "level": 4, "type": "v"},
  {"chinese": "打针", "pinyin": "dǎzhēn", "english": "to give/have an injection", "level": 4, "type": "v"},
  {"chinese": "掉", "pinyin": "diào", "english": "to fall", "level": 4, "type": "v"},
  {"chinese": "丢", "pinyin": "diū", "english": "to become lost, to throw", "level": 4, "type": "v"},
  {"chinese": "堵车", "pinyin": "dǔchē", "english": "traffic congestion", "level": 4, "type": "v"},
  {"chinese": "反对", "pinyin": "fǎnduì", "english": "to oppose", "level": 4, "type": "v"},
  {"chinese": "放弃", "pinyin": "fàngqì", "english": "to give up, to abandon", "level": 4, "type": "v"},
  {"chinese": "放松", "pinyin": "fàngsōng", "english": "to relax", "level": 4, "type": "v"},
  {"chinese": "发生", "pinyin": "fāshēng", "english": "to happen", "level": 4, "type": "v"},
  {"chinese": "发展", "pinyin": "fāzhǎn", "english": "to develop, to grow", "level": 4, "type": "v"},
  {"chinese": "符合", "pinyin": "fúhé", "english": "to accord with; to meet criteria", "level": 4, "type": "v"},
  {"chinese": "复印", "pinyin": "fùyìn", "english": "to photocopy", "level": 4, "type": "v"},
  {"chinese": "负责", "pinyin": "fùzé", "english": "to be in charge of", "level": 4, "type": "v"},
  {"chinese": "改变", "pinyin": "gǎibiàn", "english": "to change", "level": 4, "type": "v"},
  {"chinese": "赶", "pinyin": "gǎn", "english": "to hurry, to rush", "level": 4, "type": "v"},
  {"chinese": "干", "pinyin": "gàn", "english": "to work; to do", "level": 4, "type": "v"},
  {"chinese": "干杯", "pinyin": "gānbēi", "english": "cheers!", "level": 4, "type": "v"},
  {"chinese": "感动", "pinyin": "gǎndòng", "english": "to move emotionally", "level": 4, "type": "v"},
  {"chinese": "感谢", "pinyin": "gǎnxiè", "english": "to be grateful", "level": 4, "type": "v"},
  {"chinese": "够", "pinyin": "gòu", "english": "to be enough", "level": 4, "type": "v"},
  {"chinese": "购物", "pinyin": "gòuwù", "english": "shopping", "level": 4, "type": "v"},
  {"chinese": "挂", "pinyin": "guà", "english": "to hang; to hang up (phone)", "level": 4, "type": "v"},
  {"chinese": "逛", "pinyin": "guàng", "english": "to stroll, to browse shops", "level": 4, "type": "v"},
  {"chinese": "估计", "pinyin": "gūjì", "english": "to estimate", "level": 4, "type": "v"},
  {"chinese": "害羞", "pinyin": "hàixiū", "english": "shy", "level": 4, "type": "adj"},
  {"chinese": "后悔", "pinyin": "hòuhuǐ", "english": "to regret", "level": 4, "type": "v"},
  {"chinese": "怀疑", "pinyin": "huáiyí", "english": "to suspect; to doubt", "level": 4, "type": "v"},
  {"chinese": "回忆", "pinyin": "huíyì", "english": "to recall", "level": 4, "type": "v"},
  {"chinese": "获得", "pinyin": "huòdé", "english": "to obtain", "level": 4, "type": "v"},
  {"chinese": "寄", "pinyin": "jì", "english": "to mail, to send", "level": 4, "type": "v"},
  {"chinese": "加班", "pinyin": "jiābān", "english": "to work overtime", "level": 4, "type": "v"},
  {"chinese": "坚持", "pinyin": "jiānchí", "english": "to persevere", "level": 4, "type": "v"},
  {"chinese": "减肥", "pinyin": "jiǎnféi", "english": "to lose weight", "level": 4, "type": "v"},
  {"chinese": "降低", "pinyin": "jiàngdī", "english": "to reduce", "level": 4, "type": "v"},
  {"chinese": "降落", "pinyin": "jiàngluò", "english": "to land, to descend", "level": 4, "type": "v"},
  {"chinese": "减少", "pinyin": "jiǎnshǎo", "english": "to decrease", "level": 4, "type": "v"},
  {"chinese": "交", "pinyin": "jiāo", "english": "to make (friends)", "level": 4, "type": "v"},
  {"chinese": "交流", "pinyin": "jiāoliú", "english": "to communicate", "level": 4, "type": "v"},
  {"chinese": "接受", "pinyin": "jiēshòu", "english": "to accept", "level": 4, "type": "v"},
  {"chinese": "节约", "pinyin": "jiéyuē", "english": "to economize; to conserve", "level": 4, "type": "v"},
  {"chinese": "积累", "pinyin": "jīlěi", "english": "to accumulate", "level": 4, "type": "v"},
  {"chinese": "镜子", "pinyin": "jìngzi", "english": "mirror", "level": 4, "type": "n"},
  {"chinese": "进行", "pinyin": "jìnxíng", "english": "to conduct, to carry on", "level": 4, "type": "v"},
  {"chinese": "禁止", "pinyin": "jìnzhǐ", "english": "to prohibit; to forbid", "level": 4, "type": "v"},
  {"chinese": "继续", "pinyin": "jìxù", "english": "to continue", "level": 4, "type": "v"},
  {"chinese": "举", "pinyin": "jǔ", "english": "to raise, to lift", "level": 4, "type": "v"},
  {"chinese": "举办", "pinyin": "jǔbàn", "english": "to conduct; to hold", "level": 4, "type": "v"},
  {"chinese": "拒绝", "pinyin": "jùjué", "english": "to refuse, to reject", "level": 4, "type": "v"},
  {"chinese": "举行", "pinyin": "jǔxíng", "english": "to hold (event)", "level": 4, "type": "v"},
  {"chinese": "考虑", "pinyin": "kǎolǜ", "english": "to consider", "level": 4, "type": "v"},
  {"chinese": "咳嗽", "pinyin": "késou", "english": "to cough", "level": 4, "type": "v"},
  {"chinese": "拉", "pinyin": "lā", "english": "to pull", "level": 4, "type": "v"},
  {"chinese": "来不及", "pinyin": "láibují", "english": "not enough time to", "level": 4, "type": "v"},
  {"chinese": "来得及", "pinyin": "láidejí", "english": "can make it in time", "level": 4, "type": "v"},
  {"chinese": "来自", "pinyin": "láizì", "english": "to come from", "level": 4, "type": "v"},
  {"chinese": "浪费", "pinyin": "làngfèi", "english": "to waste", "level": 4, "type": "v"},
  {"chinese": "理发", "pinyin": "lǐfà", "english": "to get hair cut", "level": 4, "type": "v"},
  {"chinese": "理解", "pinyin": "lǐjiě", "english": "to comprehend", "level": 4, "type": "v"},
  {"chinese": "例如", "pinyin": "lìrú", "english": "for example", "level": 4, "type": "v"},
  {"chinese": "留", "pinyin": "liú", "english": "to leave (something)", "level": 4, "type": "v"},
  {"chinese": "流行", "pinyin": "liúxíng", "english": "to be popular", "level": 4, "type": "v"},
  {"chinese": "满", "pinyin": "mǎn", "english": "to reach a quota or limit", "level": 4, "type": "v"},
  {"chinese": "迷路", "pinyin": "mílù", "english": "to get lost", "level": 4, "type": "v"},
  {"chinese": "弄", "pinyin": "nòng", "english": "to do", "level": 4, "type": "v"},
  {"chinese": "排队", "pinyin": "páiduì", "english": "to line up", "level": 4, "type": "v"},
  {"chinese": "排列", "pinyin": "páiliè", "english": "to arrange in order", "level": 4, "type": "v"},
  {"chinese": "陪", "pinyin": "péi", "english": "to accompany", "level": 4, "type": "v"},
  {"chinese": "骗", "pinyin": "piàn", "english": "to trick, to deceive", "level": 4, "type": "v"},
  {"chinese": "破", "pinyin": "pò", "english": "to break", "level": 4, "type": "v"},
  {"chinese": "敲", "pinyin": "qiāo", "english": "to knock, to tap", "level": 4, "type": "v"},
  {"chinese": "取", "pinyin": "qǔ", "english": "to take", "level": 4, "type": "v"},
  {"chinese": "缺少", "pinyin": "quēshǎo", "english": "to lack", "level": 4, "type": "v"},
  {"chinese": "扔", "pinyin": "rēng", "english": "to throw away", "level": 4, "type": "v"},
  {"chinese": "散步", "pinyin": "sànbù", "english": "to take a walk", "level": 4, "type": "v"},
  {"chinese": "商量", "pinyin": "shāngliang", "english": "to discuss and agree", "level": 4, "type": "v"},
  {"chinese": "剩", "pinyin": "shèng", "english": "to remain, to be left", "level": 4, "type": "v"},
  {"chinese": "生活", "pinyin": "shēnghuó", "english": "life; to live", "level": 4, "type": "v"},
  {"chinese": "使", "pinyin": "shǐ", "english": "to make, to cause", "level": 4, "type": "v"},
  {"chinese": "适合", "pinyin": "shìhé", "english": "to fit, to suit", "level": 4, "type": "v"},
  {"chinese": "适应", "pinyin": "shìyìng", "english": "to adapt to", "level": 4, "type": "v"},
  {"chinese": "使用", "pinyin": "shǐyòng", "english": "to use; to employ", "level": 4, "type": "v"},
  {"chinese": "收", "pinyin": "shōu", "english": "to receive (money)", "level": 4, "type": "v"},
  {"chinese": "受到", "pinyin": "shòudào", "english": "to receive", "level": 4, "type": "v"},
  {"chinese": "收拾", "pinyin": "shōushi", "english": "to clear away", "level": 4, "type": "v"},
  {"chinese": "输", "pinyin": "shū", "english": "to lose (competition)", "level": 4, "type": "v"},
  {"chinese": "熟悉", "pinyin": "shúxī", "english": "to be familiar with", "level": 4, "type": "v"},
  {"chinese": "抬", "pinyin": "tái", "english": "to lift, to raise", "level": 4, "type": "v"},
  {"chinese": "谈", "pinyin": "tán", "english": "to talk", "level": 4, "type": "v"},
  {"chinese": "躺", "pinyin": "tǎng", "english": "to lie on one's back", "level": 4, "type": "v"},
  {"chinese": "讨厌", "pinyin": "tǎoyàn", "english": "to dislike, to hate", "level": 4, "type": "v"},
  {"chinese": "提", "pinyin": "tí", "english": "to raise (issue), to mention", "level": 4, "type": "v"},
  {"chinese": "填空", "pinyin": "tiánkòng", "english": "to fill in the blank", "level": 4, "type": "v"},
  {"chinese": "提供", "pinyin": "tígōng", "english": "to provide", "level": 4, "type": "v"},
  {"chinese": "停", "pinyin": "tíng", "english": "to stop", "level": 4, "type": "v"},
  {"chinese": "提醒", "pinyin": "tíxǐng", "english": "to remind", "level": 4, "type": "v"},
  {"chinese": "推", "pinyin": "tuī", "english": "to push", "level": 4, "type": "v"},
  {"chinese": "推迟", "pinyin": "tuīchí", "english": "to postpone", "level": 4, "type": "v"},
  {"chinese": "脱", "pinyin": "tuō", "english": "to take off (clothing)", "level": 4, "type": "v"},
  {"chinese": "无", "pinyin": "wú", "english": "not to have", "level": 4, "type": "v"},
  {"chinese": "无法", "pinyin": "wúfǎ", "english": "to have no way to", "level": 4, "type": "v"},
  {"chinese": "响", "pinyin": "xiǎng", "english": "to make a sound", "level": 4, "type": "v"},
  {"chinese": "羡慕", "pinyin": "xiànmù", "english": "to be envious of", "level": 4, "type": "v"},
  {"chinese": "行", "pinyin": "xíng", "english": "all right, OK", "level": 4, "type": "v"},
  {"chinese": "醒", "pinyin": "xǐng", "english": "to wake up", "level": 4, "type": "v"},
  {"chinese": "修理", "pinyin": "xiūlǐ", "english": "to repair, to fix", "level": 4, "type": "v"},
  {"chinese": "吸引", "pinyin": "xīyǐn", "english": "to attract", "level": 4, "type": "v"},
  {"chinese": "养成", "pinyin": "yǎngchéng", "english": "to cultivate", "level": 4, "type": "v"},
  {"chinese": "邀请", "pinyin": "yāoqǐng", "english": "to invite", "level": 4, "type": "v"},
  {"chinese": "赢", "pinyin": "yíng", "english": "to win", "level": 4, "type": "v"},
  {"chinese": "应聘", "pinyin": "yìngpìn", "english": "to apply for a job", "level": 4, "type": "v"},
  {"chinese": "引起", "pinyin": "yǐnqǐ", "english": "to lead to, to cause", "level": 4, "type": "v"},
  {"chinese": "原谅", "pinyin": "yuánliàng", "english": "to forgive", "level": 4, "type": "v"},
  {"chinese": "阅读", "pinyin": "yuèdú", "english": "to read", "level": 4, "type": "v"},
  {"chinese": "允许", "pinyin": "yǔnxǔ", "english": "to allow, to permit", "level": 4, "type": "v"},
  {"chinese": "预习", "pinyin": "yùxí", "english": "to prepare for a lesson", "level": 4, "type": "v"},
  {"chinese": "增加", "pinyin": "zēngjiā", "english": "to add, to increase", "level": 4, "type": "v"},
  {"chinese": "占线", "pinyin": "zhànxiàn", "english": "line busy (telephone)", "level": 4, "type": "v"},
  {"chinese": "照", "pinyin": "zhào", "english": "to take a picture", "level": 4, "type": "v"},
  {"chinese": "整理", "pinyin": "zhěnglǐ", "english": "to organize, to tidy up", "level": 4, "type": "v"},
  {"chinese": "指", "pinyin": "zhǐ", "english": "to refer to", "level": 4, "type": "v"},
  {"chinese": "值得", "pinyin": "zhíde", "english": "to be worth (doing)", "level": 4, "type": "v"},
  {"chinese": "重视", "pinyin": "zhòngshì", "english": "to value, to attach importance to", "level": 4, "type": "v"},
  {"chinese": "转", "pinyin": "zhuǎn", "english": "to revolve; to turn", "level": 4, "type": "v"},
  {"chinese": "赚", "pinyin": "zhuàn", "english": "to earn; to make profit", "level": 4, "type": "v"},
  {"chinese": "祝贺", "pinyin": "zhùhè", "english": "to congratulate", "level": 4, "type": "v"},
  {"chinese": "租", "pinyin": "zū", "english": "to rent", "level": 4, "type": "v"},
  {"chinese": "尊重", "pinyin": "zūnzhòng", "english": "to respect", "level": 4, "type": "v"},
  {"chinese": "开玩笑", "pinyin": "kāi wánxiào", "english": "to play a joke; to joke", "level": 4, "type": "v"},
  {"chinese": "打招呼", "pinyin": "dǎ zhāohu", "english": "to greet somebody", "level": 4, "type": "v"},
  {"chinese": "放暑假", "pinyin": "fàng shǔjià", "english": "to be on summer vacation", "level": 4, "type": "v"},
  {"chinese": "受不了", "pinyin": "shòu buliǎo", "english": "to be unable to stand", "level": 4, "type": "v"},
  {"chinese": "弹钢琴", "pinyin": "tán gāngqín", "english": "to play the piano", "level": 4, "type": "v"}
];

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let mastered  = JSON.parse(localStorage.getItem('hskMastered'))  || {};
let srData    = JSON.parse(localStorage.getItem('hskSR'))        || {}; // { zh: { views, lastSeen } }
let isShuffled   = false;
let unknownOnly  = false;
let currentMode  = 'study';

// Quiz state
let quiz = { words: [], index: 0, correct: 0, answered: false };

// ─────────────────────────────────────────
// WORD TYPE LABELS
// ─────────────────────────────────────────
const typeLabels = {
  n:'Noun', v:'Verb', adj:'Adjective', adv:'Adverb', phrase:'Phrase',
  num:'Number', pron:'Pronoun', conj:'Conjunction', part:'Particle',
  mw:'Measure Word', ques:'Question', interj:'Interjection',
  prep:'Preposition', det:'Determiner'
};

// ─────────────────────────────────────────
// DOM REFS
// ─────────────────────────────────────────
const container       = document.getElementById('wordContainer');
const quizContainer   = document.getElementById('quizContainer');
const levelFilter     = document.getElementById('levelFilter');
const typeFilter      = document.getElementById('typeFilter');
const quizLevelFilter = document.getElementById('quizLevelFilter');
const quizTypeFilter  = document.getElementById('quizTypeFilter');
const searchInput     = document.getElementById('search');
const shuffleBtn      = document.getElementById('shuffleBtn');
const unknownBtn      = document.getElementById('unknownBtn');
const exportBtn       = document.getElementById('exportBtn');
const resetBtn        = document.getElementById('resetBtn');
const startQuizBtn    = document.getElementById('startQuizBtn');
const tabStudy        = document.getElementById('tabStudy');
const tabQuiz         = document.getElementById('tabQuiz');
const statsBar        = document.getElementById('statsBar');
const studyControls   = document.getElementById('studyControls');
const quizControls    = document.getElementById('quizControls');

// ─────────────────────────────────────────
// POPULATE TYPE FILTERS
// ─────────────────────────────────────────
function populateTypeFilters() {
  const types = [...new Set(vocabulary.map(w => w.type))].sort();
  [typeFilter, quizTypeFilter].forEach(sel => {
    types.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = typeLabels[t] || t;
      sel.appendChild(opt);
    });
  });
}

// ─────────────────────────────────────────
// FILTER WORDS
// ─────────────────────────────────────────
function getFiltered(levelSel, typeSel, searchVal, unknownOnlyFlag) {
  const term = (searchVal || '').toLowerCase();
  let list = vocabulary.filter(w => {
    const okLevel  = levelSel === 'all' || String(w.level) === levelSel;
    const okType   = typeSel  === 'all' || w.type === typeSel;
    const okSearch = !term ||
      w.chinese.toLowerCase().includes(term) ||
      w.pinyin.toLowerCase().includes(term)  ||
      w.english.toLowerCase().includes(term);
    const okUnknown = !unknownOnlyFlag || !mastered[w.chinese];
    return okLevel && okType && okSearch && okUnknown;
  });
  if (isShuffled) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }
  return list;
}

// ─────────────────────────────────────────
// SPACED REPETITION
// ─────────────────────────────────────────
function trackView(zh) {
  if (!srData[zh]) srData[zh] = { views: 0 };
  srData[zh].views++;
  srData[zh].lastSeen = Date.now();
  localStorage.setItem('hskSR', JSON.stringify(srData));
}
function srBadge(zh) {
  if (mastered[zh]) return '';
  const d = srData[zh];
  if (!d) return '';
  if (d.views >= 5) return `<span class="sr-badge">🔥 Seen ${d.views}× – needs review</span>`;
  if (d.views >= 3) return `<span class="sr-badge">⏱ Seen ${d.views}×</span>`;
  return '';
}

// ─────────────────────────────────────────
// AUDIO
// ─────────────────────────────────────────
function speak(text) {
  // First: try Web Speech API with an actual zh voice
  if (window.speechSynthesis) {
    const voices = window.speechSynthesis.getVoices();
    const zhVoice = voices.find(v => v.lang === 'zh-CN') ||
                    voices.find(v => v.lang === 'zh-TW') ||
                    voices.find(v => v.lang.startsWith('zh'));

    if (zhVoice) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang  = 'zh-CN';
      u.rate  = 0.85;
      u.voice = zhVoice;
      window.speechSynthesis.speak(u);
      return;
    }
  }

  // Fallback: Google Translate TTS (works even without local Chinese voice)
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=zh-CN&client=tw-ob`;
  const audio = new Audio(url);
  audio.play().catch(() => {
    alert('No Chinese voice found on this device and network TTS is unavailable.\nOn Linux, install a Chinese TTS voice (e.g. espeak-ng with Mandarin support).');
  });
}

// ─────────────────────────────────────────
// RENDER STUDY CARDS
// ─────────────────────────────────────────
function renderWords() {
  const filtered = getFiltered(
    levelFilter.value, typeFilter.value,
    searchInput.value, unknownOnly
  );

  container.innerHTML = '';

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="big-emoji">🔍</div>No words match your filters.</div>`;
    updateStats();
    return;
  }

  filtered.forEach(word => {
    const isKnown = !!mastered[word.chinese];
    const card = document.createElement('div');
    card.className = 'card' + (isKnown ? ' is-mastered' : '');

    const sentenceHTML = word.sentence ? `
      <div class="sentence-block" style="display:${isKnown ? 'block' : 'none'}">
        <div class="sentence-zh">📝 ${word.sentence}</div>
        <div class="sentence-py">${word.sentencePy}</div>
        <div class="sentence-en">${word.sentenceEn}</div>
      </div>` : '';

    card.innerHTML = `
      <div class="card-header">
        <div class="badges">
          <span class="level-badge">HSK ${word.level}</span>
          <span class="type-badge">${typeLabels[word.type] || word.type}</span>
          ${srBadge(word.chinese)}
        </div>
        <button class="audio-btn" title="Pronounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="chinese">${word.chinese}</div>
      <div class="pinyin">${word.pinyin}</div>
      <div class="meaning" style="display:${isKnown ? 'block' : 'none'}">${word.english}</div>
      ${sentenceHTML}
      <div class="card-actions">
        <button class="btn ${isKnown ? 'btn-success' : ''}" data-action="reveal">
          ${isKnown ? '✓ Mastered' : 'Show Meaning'}
        </button>
        ${isKnown ? '' : `<button class="btn" data-action="reveal" style="display:none"></button>`}
      </div>`;

    // Audio button
    card.querySelector('.audio-btn').addEventListener('click', () => speak(word.chinese));

    // Reveal / toggle mastered
    card.querySelector('[data-action="reveal"]').addEventListener('click', function() {
      const meaningDiv  = card.querySelector('.meaning');
      const sentBlock   = card.querySelector('.sentence-block');
      const btn         = this;   // always the actual button, regardless of data-* changes
      const shown       = meaningDiv.style.display !== 'none';

      if (!shown) {
        // First reveal: show meaning, track view
        meaningDiv.style.display = 'block';
        if (sentBlock) sentBlock.style.display = 'block';
        trackView(word.chinese);

        // Update button to two-state
        btn.textContent = '✓ Mark as Mastered';
        btn.className = 'btn';
        btn.removeAttribute('data-action');
        btn.dataset.action2 = 'master';
      } else if (btn.dataset.action2 === 'master') {
        // Second click: mark mastered
        mastered[word.chinese] = true;
        localStorage.setItem('hskMastered', JSON.stringify(mastered));
        card.classList.add('is-mastered');
        btn.textContent = '✓ Mastered';
        btn.className = 'btn btn-success';
        delete btn.dataset.action2;
        btn.dataset.action3 = 'unmaster';
        updateStats();
        if (unknownOnly) { card.style.opacity = '0.4'; card.style.pointerEvents = 'none'; }
      } else if (btn.dataset.action3 === 'unmaster') {
        // Third click (on mastered): unmark
        delete mastered[word.chinese];
        localStorage.setItem('hskMastered', JSON.stringify(mastered));
        card.classList.remove('is-mastered');
        meaningDiv.style.display = 'none';
        if (sentBlock) sentBlock.style.display = 'none';
        btn.textContent = 'Show Meaning';
        btn.className = 'btn';
        delete btn.dataset.action3;
        btn.dataset.action = 'reveal';
        updateStats();
      }
    });

    container.appendChild(card);
  });

  updateStats();
}

// ─────────────────────────────────────────
// STATS
// ─────────────────────────────────────────
function updateStats() {
  const total = vocabulary.length;
  const count = Object.keys(mastered).filter(w => vocabulary.some(v => v.chinese === w)).length;
  const pct   = total > 0 ? Math.round((count / total) * 100) : 0;
  document.getElementById('progressCount').textContent = count;
  document.getElementById('totalCount').textContent    = total;
  document.getElementById('progressBar').style.width   = pct + '%';
  document.getElementById('progressPct').textContent   = pct + '%';
}

// ─────────────────────────────────────────
// EXPORT PROGRESS (CSV)
// ─────────────────────────────────────────
function exportCSV() {
  const masteredWords = vocabulary.filter(w => mastered[w.chinese]);
  if (masteredWords.length === 0) { alert('No mastered words to export yet!'); return; }

  const rows = [['Chinese','Pinyin','English','Level','Type','Times Seen']];
  masteredWords.forEach(w => {
    rows.push([
      w.chinese, w.pinyin, w.english, w.level, w.type,
      srData[w.chinese]?.views || 0
    ]);
  });

  const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'hsk_mastered_words.csv';
  a.click();
}

// ─────────────────────────────────────────
// QUIZ MODE
// ─────────────────────────────────────────
function startQuiz() {
  const words = getFiltered(
    quizLevelFilter.value, quizTypeFilter.value, '', false
  );
  if (words.length < 4) {
    alert('Need at least 4 words to start a quiz. Add more words or change filters.');
    return;
  }
  quiz = { words, index: 0, correct: 0, answered: false };
  renderQuizCard();
}

function renderQuizCard() {
  if (quiz.index >= quiz.words.length) { renderQuizEnd(); return; }

  const word = quiz.words[quiz.index];
  // Build 4 options: 1 correct + 3 random wrong
  const wrongPool = vocabulary.filter(w => w.chinese !== word.chinese);
  const shuffledWrong = wrongPool.sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [word, ...shuffledWrong].sort(() => Math.random() - 0.5);

  const sentenceHTML = word.sentence ? `
    <div class="quiz-sentence" id="quizSentence" style="display:none">
      <div class="sentence-zh">📝 ${word.sentence}</div>
      <div class="sentence-py">${word.sentencePy}</div>
      <div class="sentence-en">${word.sentenceEn}</div>
    </div>` : '<div id="quizSentence"></div>';

  quizContainer.innerHTML = `
    <div class="quiz-score-bar">
      <span>✅ <strong id="qCorrect">${quiz.correct}</strong> correct</span>
      <span style="color:#888">Question ${quiz.index + 1} / ${quiz.words.length}</span>
      <span>❌ <strong id="qWrong">${quiz.index - quiz.correct}</strong> wrong</span>
    </div>
    <div class="quiz-card">
      <div class="quiz-lbadge">HSK ${word.level} · ${typeLabels[word.type] || word.type}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:12px">
        <div class="quiz-chinese">${word.chinese}</div>
        <button onclick="speak('${word.chinese.replace(/'/g,"\\'")}');" class="audio-btn" title="Pronounce">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      </div>
      <div class="quiz-pinyin">${word.pinyin}</div>
      <div class="quiz-options" id="quizOptions">
        ${options.map((opt, i) => `
          <button class="quiz-opt" data-correct="${opt.chinese === word.chinese}" data-idx="${i}">
            ${opt.english}
          </button>`).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      ${sentenceHTML}
      <div class="quiz-nav">
        <button class="btn" id="quizNextBtn" style="display:none" onclick="advanceQuiz()">
          ${quiz.index + 1 < quiz.words.length ? 'Next →' : 'See Results'}
        </button>
      </div>
    </div>`;

  // Attach option listeners
  document.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(btn, word));
  });
}

function handleQuizAnswer(btn, word) {
  if (quiz.answered) return;
  quiz.answered = true;

  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) { quiz.correct++; trackView(word.chinese); }

  // Highlight all options
  document.querySelectorAll('.quiz-opt').forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') b.classList.add('correct');
    else if (b === btn && !isCorrect) b.classList.add('wrong');
  });

  const fb = document.getElementById('quizFeedback');
  const qs = document.getElementById('quizSentence');
  if (isCorrect) {
    fb.textContent = '✅ Correct!';
    fb.className = 'quiz-feedback correct';
  } else {
    fb.textContent = `❌ Incorrect — the answer is "${word.english}"`;
    fb.className = 'quiz-feedback wrong';
  }

  if (qs && word.sentence) qs.style.display = 'block';
  document.getElementById('quizNextBtn').style.display = 'inline-block';
}

function advanceQuiz() {
  quiz.index++;
  quiz.answered = false;
  renderQuizCard();
}

function renderQuizEnd() {
  const total = quiz.words.length;
  const pct   = Math.round((quiz.correct / total) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const msg   = pct >= 80 ? 'Excellent work!' : pct >= 50 ? 'Good effort!' : 'Keep practicing!';

  quizContainer.innerHTML = `
    <div class="quiz-end">
      <div>${emoji}</div>
      <div class="score-big">${pct}%</div>
      <h2>${msg}</h2>
      <p>${quiz.correct} correct out of ${total} questions</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button class="btn" onclick="startQuiz()">🔄 Retry</button>
        <button class="btn btn-outline" onclick="switchMode('study')">📖 Back to Study</button>
      </div>
    </div>`;
}

// ─────────────────────────────────────────
// MODE SWITCHING
// ─────────────────────────────────────────
function switchMode(mode) {
  currentMode = mode;
  const isStudy = mode === 'study';

  tabStudy.classList.toggle('active', isStudy);
  tabQuiz.classList.toggle('active', !isStudy);

  container.style.display      = isStudy ? '' : 'none';
  quizContainer.style.display  = isStudy ? 'none' : '';
  statsBar.style.display       = isStudy ? '' : 'none';
  studyControls.style.display  = isStudy ? '' : 'none';
  quizControls.style.display   = isStudy ? 'none' : '';

  if (!isStudy) {
    quizContainer.innerHTML = `
      <div class="quiz-end" style="padding:40px 36px">
        <div style="font-size:3rem">🧠</div>
        <h2 style="margin:16px 0 10px">Quiz Mode</h2>
        <p>Select a level and word type, then press <strong>Start Quiz</strong>.</p>
        <p style="font-size:0.9rem;color:#aaa;margin-top:8px">You'll be tested with 4-option multiple choice.</p>
      </div>`;
  }
}

// ─────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────
tabStudy.addEventListener('click', () => switchMode('study'));
tabQuiz.addEventListener('click',  () => switchMode('quiz'));

levelFilter.addEventListener('change', renderWords);
typeFilter.addEventListener('change',  renderWords);
searchInput.addEventListener('input',  renderWords);

shuffleBtn.addEventListener('click', () => {
  isShuffled = !isShuffled;
  shuffleBtn.textContent = isShuffled ? '🔀 Shuffled ✓' : '🔀 Shuffle';
  shuffleBtn.classList.toggle('active', isShuffled);
  renderWords();
});

unknownBtn.addEventListener('click', () => {
  unknownOnly = !unknownOnly;
  unknownBtn.textContent = unknownOnly ? '👁 Unknown Only ✓' : '👁 Unknown Only';
  unknownBtn.classList.toggle('active', unknownOnly);
  renderWords();
});

exportBtn.addEventListener('click', exportCSV);

resetBtn.addEventListener('click', () => {
  if (confirm('Reset all mastered words and spaced repetition data?')) {
    localStorage.removeItem('hskMastered');
    localStorage.removeItem('hskSR');
    mastered = {};
    srData   = {};
    renderWords();
  }
});

startQuizBtn.addEventListener('click', startQuiz);

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
populateTypeFilters();
renderWords();
