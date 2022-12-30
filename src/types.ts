interface UserInfo {
    /**
     * 籍贯
     */
    address: string;
    /**
     * 出生日期，yyyy-mm-dd
     */
    birthday: string;
    /**
     * 宿舍
     */
    dormitory: string;
    /**
     * 性别
     */
    gender: string;
    /**
     * 年级
     */
    grade: string;
    /**
     * 学号
     */
    id: string;
    /**
     * 身份证号
     */
    idNum: string;
    /**
     * 专业
     */
    major: string;
    /**
     * 民族
     */
    nationality: string;
    /**
     * 电话号码
     */
    phone: string;
    /**
     * 姓名
     */
    username: string;
}
interface FamilyInfo {
    /**
     * 地址
     */
    address: string;
    /**
     * 困难认定
     */
    isPoor: boolean;
    /**
     * 困难情况
     */
    poorSituation?: string;
    familyPhone: string;
}

/**
 * 学生家庭成员信息
 */
interface FamilyMemberInfo {
    /**
     * 姓名
     */
    name: string;
    /**
     * 联系电话
     */
    phone: string;
    /**
     * 政治面貌
     */
    politicsStatus: string;
    /**
     * 关系
     */
    relation: string;
    /**
     * 工作地点
     */
    workPlace: string;
}

export interface DescriptionsTable {
    [index: string]: {
        title: string,
        pattern?: RegExp,
        patternMessage?: string
        empty?:boolean
    }
}
/**
 * 每周的课表为数组里的一个元素, 即使为空也需要占用一个元素
 *
 * 每周课表信息
 */
export interface SchedulePerWeek {
    withoutTime: WithoutTime[];
    withTime: WithTime[];
}

export interface WithTime {
    name: string;
    place: string;
    /**
     * 哪几节课，num-num
     */
    sections: string;
    teacher: string;
    /**
     * 周几
     */
    timeInWeek: number;
    signIn:'yes'|'no'|'unknow'
}

export interface WithoutTime {
    name: string;
    teacher: string;
    signIn:'yes'|'no'|'unknow'
}

export interface AllCourseContention{
    courseNames:string[]
    signIn:number[]
    notSignIn:number[]
    unknow:number[]
}

export interface SignInSummary{
    signIn:number
    notSignIn:number
    unknow:number
}

/**
 * termResults
 */
export interface TermResults {
    /**
     * 学分
     */
    credit: number;
    /**
     * 绩点
     */
    GPA: number;
    /**
     * 课程名
     */
    name: string;
    /**
     * 成绩
     */
    result: number;
    /**
     * 老师
     */
    teacher: string;
    /**
     * 课程性质
     */
    type: string;
}

export interface CourseResult{
    usual:{
        score:number
        rate:number
    }
    final:{
        score:number
        rate:number
    }
}

/**
 * ApifoxModel
 */
export interface AllSituation {
    /**
     * 主修
     */
    main: MainObject;
}

/**
 * 主修
 */
export interface MainObject {
    common: Situation;
    /**
     * 大类教育
     */
    major: Situation;
    /**
     * 实践教育
     */
    practical: Situation;
    /**
     * 专业教育
     */
    professional: Situation;
}

/**
 * Situation
 *
 * 大类教育
 *
 * 实践教育
 *
 * 专业教育
 */
export interface Situation {
    /**
     * 必修
     */
    compulsory: CompulsoryObject;
    /**
     * 选修
     */
    elective: ElectiveObject;
}

/**
 * 必修
 */
export interface CompulsoryObject {
    /**
     * 当前学分
     */
    current: number;
    /**
     * 要求学分
     */
    require: number;
}

/**
 * 选修
 */
export interface ElectiveObject {
    /**
     * 当前学分
     */
    current: number;
    /**
     * 要求学分
     */
    require: number;
}

export interface CourseGPA {
    /**
     * gpa成绩，学分*gpa
     */
    gpa: number;
    /**
     * 课程名
     */
    name: string;
}