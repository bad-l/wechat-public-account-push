export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx4d594e345e582932",
    // 公众号APP_SECRET
    APP_SECRET: "c5f85eeecdc95561a73b15e7e026cafa",
    // 模板消息id
    TEMPLATE_ID: "6F-t1c7M-SoRnZw6JS9YNf929W5Gw_B1zxjrmy6F4fk",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["od_U16vLUdIds2XzHIvC8lfHBkqs","od_U16hYsYXLic-_7u2sTY9_E0JQ"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "湖北",
    // 所在城市
    CITY: "武汉",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    //{"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "01-04"},
    //{"type": "生日", "name": "李四", "year": "1996", "date": "08-29"},
    //{"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "08-29"},FESTIVALS
    birthdays: [
      {"type": "生日", "name": "d", "year": "2002", "date": "02-01"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    //FESTIVALS_LIMIT: 0,

    /** 日期相关 */

    // 在一起的日子，格式同上
    //LOVE_DATE: "2015-05-01",
    // 结婚纪念日
    //MARRY_DATE: "2020-01-04",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 距离考试还有{{love_day.DATA}}天
// 距离四级考试还有{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{success_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
