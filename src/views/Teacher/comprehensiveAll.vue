<template>
    <div>
        <el-form ref="zhFind" :model="zhFind" :rules="rules" size="small" label-width="100px" style="margin-top: 3%;">
            <el-row :gutter="0">
                <el-col :span="6">
                    <el-form-item label="年级" prop="zhgrade">
                        <el-select v-model="zhFind.zhgrade" placeholder="请选择年级" clearable :style="{ width: '100%' }">
                            <el-option v-for="(item, index) in zhgradeOptions" :key="index" :label="item.label"
                                :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="学年" prop="zhscyear">
                        <el-select v-model="zhFind.zhscyear" placeholder="请选择扣分学年" clearable :style="{ width: '100%' }">
                            <el-option v-for="(item, index) in zhscyearOptions" :key="index" :label="item.label"
                                :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item size="large" style="text-align: left;">
                        <el-button size="small" type="primary" @click="submitForm" :icon="Search">查询</el-button>
                        <el-button size="small" @click="resetForm" type="success" :icon="Refresh">重置
                        </el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div class="comprehensive-cards">
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>综合测评排名</h4>
                        <el-table :data="tableData.zhpaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="zhchart" class="chart" style="width: 35vw;height: 100%;"></div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>思想品德模块排名</h4>
                        <el-table :data="tableData.sxpaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="sxchart" class="chart" style="width: 550px;height: 350px;"></div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>学业表现模块排名</h4>
                        <el-table :data="tableData.xypaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="xychart" class="chart" style="width: 550px;height: 350px;"></div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>科研竞赛模块排名</h4>
                        <el-table :data="tableData.kypaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="kychart" class="chart" style="width: 550px;height: 350px;"></div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>艺体素养模块排名</h4>
                        <el-table :data="tableData.ytpaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="ytchart" class="chart" style="width: 550px;height: 350px;"></div>
                    </el-col>
                </el-row>
            </el-card>
            <el-card>
                <el-row :gutter="32">
                    <el-col :xs="24" :sm="24" :lg="12">
                        <h4>实践创业模块排名</h4>
                        <el-table :data="tableData.sjpaiData" border :header-cell-style="{ textAlign: 'center' }"
                            :cell-style="{ textAlign: 'center' }" stripe size="mini" style="height:300px;"
                            max-height="300px">
                            <el-table-column prop="stuname" label="姓名" >
                            </el-table-column>
                            <el-table-column prop="stunum" label="学号" >
                            </el-table-column>
                            <el-table-column prop="major" label="专业">
                            </el-table-column>
                            <el-table-column prop="score" label="分数" >
                            </el-table-column>
                            <el-table-column prop="ranking" label="排名" >
                            </el-table-column>
                        </el-table>
                    </el-col>

                    <el-col :xs="24" :sm="24" :lg="12">
                        <div id="sjchart" class="chart" style="width: 550px;height: 350px;"></div>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>

<script lang="ts" setup>import { ElForm } from 'element-plus';
import * as echarts from 'echarts'
import { Search, Refresh } from '@element-plus/icons-vue'
let data = {
    zhscore: [10, 66, 125, 134, 16],
    sxscore: [20, 34, 150, 124, 33],
    xyscore: [8, 23, 66, 75, 78],
    kyscore: [11, 66, 125, 134, 26],
    ytscore: [5, 25, 95, 154, 68],
    sjscore: [6, 12, 85, 164, 50],
    tableData: {
        zhpaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                major: '计算机科学与技术',
                stuname: 'J俊杰',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
        xypaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                stuname: 'J俊杰',
                major: '计算机科学与技术',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
        sxpaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                stuname: 'J俊杰',
                major: '计算机科学与技术',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
        kypaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                stuname: 'J俊杰',
                major: '计算机科学与技术',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
        ytpaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                stuname: 'J俊杰',
                major: '计算机科学与技术',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
        sjpaiData: [
            {
                stugrade: '2018级',
                stunum: '20182131524',
                stuname: '连书都',
                major: '计算机科学与技术',
                score: 86.5,
                ranking: '1',
            },
            {
                stugrade: '2018级',
                stunum: '20182135744',
                stuname: '撒旦法',
                major: '计算机科学与技术',
                score: 83.5,
                ranking: '2',
            },
            {
                stugrade: '2018级',
                stunum: '20182196524',
                stuname: '黎明',
                major: '计算机科学与技术（师范）',
                score: 82,
                ranking: '3',
            },
            {
                stugrade: '2018级',
                stunum: '20185421524',
                stuname: '王宇',
                major: '网络工程',
                score: 80,
                ranking: '4',
            },
            {
                stugrade: '2018级',
                stunum: '20182131333',
                major: '计算机科学与技术',
                stuname: '晴天',
                score: 78,
                ranking: '5',
            },
            {
                stugrade: '2018级',
                stunum: '20182131024',
                stuname: 'J俊杰',
                major: '计算机科学与技术',
                score: 74,
                ranking: '6',
            },
            {
                stugrade: '2018级',
                stunum: '20182184251',
                major: '网络工程',
                stuname: '时代',
                score: 66,
                ranking: '7',
            },
            {
                stugrade: '2018级',
                stunum: '20182581524',
                major: '网络工程',
                stuname: '陈宫',
                score: 65,
                ranking: '8',
            },
            {
                stugrade: '2018级',
                stunum: '20182138544',
                major: '计算机科学与技术',
                stuname: '李敏',
                score: 50,
                ranking: '9',
            },
            {
                stugrade: '2018级',
                stunum: '20182198724',
                major: '计算机科学与技术（师范）',
                stuname: '连舒适',
                score: 44,
                ranking: '10',
            },
        ],
    },
    zhFind: {
        zhgrade: "\"2021级\"",
        zhscyear: 20212022,
    },
    rules: {
        zhgrade: [{
            required: true,
            message: '请选择年级',
            trigger: 'change'
        }],
        zhscyear: [{
            required: true,
            message: '请选择扣分学年',
            trigger: 'change'
        }],
    },
    zhgradeOptions: [
        {
            "label": "2021级",
            "value": "\"2021级\""
        }, {
            "label": "2020级",
            "value": "\"2020级\""
        }, {
            "label": "2019级",
            "value": "\"2019级\""
        }, {
            "label": "2018级",
            "value": "\"2018级\""
        }],
    zhscyearOptions: [
        {
            "label": "2021~2022学年",
            "value": 20212022
        }, {
            "label": "2020~2021学年",
            "value": 20202021
        }, {
            "label": "2019~2020学年",
            "value": 20192020
        }, {
            "label": "2018~2019学年",
            "value": 20182019
        }],

}
const { zhscore, sxscore, xyscore, kyscore, ytscore, sjscore, zhgradeOptions, zhscyearOptions, rules, tableData, zhFind } = data

onMounted(() => {
    areachart('zhchart', zhscore, '综合测评分数段统计');
    areachart('sxchart', sxscore, '思想品德模块分数段统计');
    areachart('xychart', xyscore, '学业表现模块分数段统计');
    areachart('kychart', kyscore, '科研竞赛模块分数段统计');
    areachart('ytchart', ytscore, '艺体素养模块分数段统计');
    areachart('sjchart', sjscore, '实践创业模块分数段统计');
})

function areachart(chartname, scoredata, charttext) {
    var Area = echarts.init(document.getElementById(chartname));

    Area.setOption({
        title: {
            text: charttext
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            bottom: '10',
            data: ['90分~100分', '80分~90分', '70分~80分', '60分~70分', '60分以下',],
        },
        series: [
            {
                areaStyle: {
                },
                name: '分数段人数',
                type: 'pie',
                roseType: 'radius',
                radius: [15, 95],
                center: ['50%', '38%'],
                data: [
                    { value: scoredata[0], name: '90分~100分' },
                    { value: scoredata[1], name: '80分~90分' },
                    { value: scoredata[2], name: '70分~80分' },
                    { value: scoredata[3], name: '60分~70分' },
                    { value: scoredata[4], name: '60分以下' }
                ],
                animationEasing: 'cubicInOut',
                animationDuration: 3000
            }
        ]
    })
}
function submitForm() {
}
const zhFindInstance = ref<InstanceType<typeof ElForm> | undefined>()
function resetForm() {
    zhFindInstance.value.resetFields()
}


</script>

<style lang="scss" scoped>
.comprehensive-cards {
    padding: 0 4%;
    display: flex;
    flex-direction: column;

    .el-card {
        margin-top: 3%;
    }
    .chart{
        width: 35vw !important;
        height: 100% !important;
    }
}

</style>
