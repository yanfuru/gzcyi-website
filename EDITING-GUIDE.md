# 广州创益信息技术有限公司 - 网站内容修改指南

本文档帮助你自行修改网站内容，无需懂代码。

---

## 一、文件结构说明

```
gzcyi-website/
├── index.html                    ← 首页
├── css/style.css                 ← 全局样式（一般不用改）
├── js/main.js                    ← 全局脚本（一般不用改）
├── images/                       ← 图片目录
│   ├── about/                    ← 关于我们页面的图片
│   ├── cases/                    ← 工程案例的图片
│   ├── certificates/             ← 资质证书的图片
│   └── team/                     ← 团队成员的照片
├── videos/                       ← 视频目录
│   └── company-intro.mp4         ← 公司宣传片（放这里）
├── docs/                         ← 文档目录
│   └── company-profile.pdf       ← 公司宣传PPT转PDF（放这里）
└── pages/
    ├── about.html                 ← 关于我们
    ├── qualifications.html        ← 资质荣誉
    ├── cases.html                 ← 工程案例
    ├── services.html              ← 服务介绍
    └── contact.html              ← 联系我们
```

---

## 二、怎么修改网站内容

### 方法：在 GitHub 网页上直接编辑

1. 手机或电脑打开 https://github.com/yanfuru/gzcyi-website
2. 找到要改的文件，点击进入
3. 点右上角的 **铅笔图标 ✏️**（Edit this file）
4. 修改内容
5. 点右上角 **Commit changes...** → 再点 **Commit changes** 确认
6. 等 1-2 分钟，网站自动更新

### 上传图片/视频/文档

1. 进入对应目录（如 `images/cases/`）
2. 点 **Add file** → **Upload files**
3. 拖入或选择文件
4. 点 **Commit changes**

---

## 三、各页面具体修改指南

### 📌 1. 首页（index.html）

#### 修改公司介绍文字
搜索关键词 `广州创益信息技术有限公司是一家集`，修改后面的文字。

#### 修改统计数据（项目数量、客户数量等）
搜索 `data-count`，修改数字：
```html
<div class="stat-number" data-count="200">0</div>  ← 改200为实际数字
<div class="stat-number" data-count="50">0</div>   ← 改50为实际数字
<div class="stat-number" data-count="10">0</div>   ← 改10为实际数字
<div class="stat-number" data-count="98">0</div>   ← 改98为实际数字
```

#### 修改合作伙伴品牌
搜索 `clients-grid`，修改其中的品牌名称：
```html
<div class="client-item">HIKVISION</div>  ← 改为实际合作品牌名
```

---

### 📌 2. 关于我们（pages/about.html）

#### 修改公司简介
搜索 `公司简介`，修改下方 `<p>` 标签中的文字。

#### 修改发展历程
搜索 `timeline`，每个时间节点格式：
```html
<div class="timeline-item fade-in">
  <div class="timeline-dot"></div>
  <div class="timeline-content">
    <div class="timeline-year">2014</div>        ← 年份
    <h3>公司成立</h3>                              ← 标题
    <p>广州创益信息技术...起步。</p>                ← 描述
  </div>
</div>
```
要新增时间节点，复制一整块 `timeline-item` 改内容即可。

#### 修改团队成员
搜索 `team-grid`，每个成员格式：
```html
<div class="team-card fade-in">
  <div class="team-avatar">...</div>    ← 头像SVG，可替换为<img src="images/team/姓名.jpg">
  <h4>张建国</h4>                       ← 姓名
  <div class="role">总经理 / 创始人</div> ← 职位
  <p>20年弱电行业经验，高级工程师</p>     ← 简介
</div>
```
替换头像为真实照片：先把照片上传到 `images/team/` 目录，然后把 `<div class="team-avatar">...SVG内容...</div>` 替换为：
```html
<img class="team-avatar" src="../images/team/zhangjianguo.jpg" alt="张建国" style="border-radius:50%;width:120px;height:120px;object-fit:cover;">
```

#### 上传宣传PPT
1. 把PPT导出为PDF
2. 上传到 `docs/` 目录，命名为 `company-profile.pdf`
3. 页面中已有下载按钮，路径已配好

---

### 📌 3. 资质荣誉（pages/qualifications.html）

#### 修改资质证书
搜索 `qual-grid`，每个资质格式：
```html
<div class="qual-card fade-in">
  <div class="qual-card-icon">📋</div>              ← 图标emoji
  <h3>电子与智能化工程专业承包</h3>                   ← 证书名称
  <div class="cert-number">贰级资质</div>             ← 证书编号/等级
  <p>可承担单项合同额2500万元以下...</p>               ← 证书说明
</div>
```

#### 添加证书图片
1. 把证书照片上传到 `images/certificates/` 目录
2. 在对应资质卡片中添加图片，在 `<div class="qual-card-icon">` 前面加：
```html
<img src="../images/certificates/资质名称.jpg" alt="证书" style="width:100%;height:160px;object-fit:contain;margin-bottom:16px;border-radius:8px;">
```

#### 修改荣誉奖项
搜索 `honors-grid`，每个奖项格式：
```html
<div class="honor-card fade-in">
  <div class="honor-badge">🏆</div>                ← 奖杯图标
  <h3>优秀弱电工程企业</h3>                          ← 奖项名称
  <div class="year">2023年度</div>                   ← 获奖年份
  <p>广东省智能建筑行业协会颁发</p>                    ← 颁发机构
</div>
```

---

### 📌 4. 工程案例（pages/cases.html）

#### 修改案例
搜索 `cases-grid`，每个案例格式：
```html
<div class="case-card fade-in" data-category="park">   ← 类别：park/office/education/government/av
  <div class="case-image">
    <span class="case-tag">智慧园区</span>              ← 标签文字
    <svg ...>...</svg>                                   ← 占位图，可替换
    <div class="overlay"><span class="view-detail">查看详情</span></div>
  </div>
  <div class="case-info">
    <h3>某科技创新产业园区智能化工程</h3>                 ← 案例标题
    <div class="case-meta">
      <span>📅 2023年</span>                             ← 年份
      <span>📐 12万㎡</span>                             ← 面积
      <span>📍 广州黄埔</span>                           ← 地点
    </div>
    <p class="desc">涵盖综合布线、安防监控...</p>         ← 案例描述
    <div class="case-tags">
      <span class="tag">综合布线</span>                   ← 技术标签
      <span class="tag">安防监控</span>
    </div>
  </div>
</div>
```

#### 替换案例占位图为真实照片
1. 把项目照片上传到 `images/cases/` 目录
2. 把 `<svg ...>...</svg>` 整段替换为：
```html
<img src="../images/cases/项目名称.jpg" alt="案例" style="width:100%;height:100%;object-fit:cover;">
```

#### 添加/删除案例
复制一整块 `case-card` 粘贴后改内容即可新增；删除一整块 `case-card` 即可移除。

#### 筛选类别对照
`data-category` 的值对应筛选按钮：
- `park` → 智慧园区
- `office` → 商业办公
- `education` → 教育机构
- `government` → 政府单位
- `av` → 影音集成

---

### 📌 5. 服务介绍（pages/services.html）

#### 修改服务内容
搜索 `service-block`，每个服务格式：
```html
<div class="service-block fade-in">
  <div class="service-image">...</div>          ← 左/右侧图片
  <div class="service-detail">
    <h3>综合布线系统</h3>                        ← 服务名称
    <p>提供从规划、设计到施工...</p>               ← 服务描述
    <div class="service-features">
      <span class="feat">光纤布线</span>          ← 特性标签
      <span class="feat">铜缆布线</span>
    </div>
  </div>
</div>
```

---

### 📌 6. 联系我们（pages/contact.html）

#### 修改联系方式
搜索 `contact-item`，修改电话、邮箱、地址等：
```html
<div class="contact-item">
  <div class="contact-item-icon">📞</div>
  <div class="contact-item-text">
    <h4>联系电话</h4>
    <p>020-8888 6666</p>         ← 改为真实电话
  </div>
</div>
```

#### 修改地址
搜索 `广州市天河区` 替换为真实地址。

---

### 📌 7. 底部Footer（所有页面都有）

每个页面底部都有相同的 footer，需要逐个修改：

#### 修改公司地址、电话、邮箱
搜索 `footer-contact`，修改其中的信息。

#### 修改ICP备案号
搜索 `粤ICP备`，替换为真实备案号。

---

### 📌 8. 上传宣传视频

1. 把视频文件（MP4格式）上传到 `videos/` 目录，命名为 `company-intro.mp4`
2. 首页视频播放器路径已配好，上传后即可播放

---

## 四、批量修改技巧

### 全站替换电话号码
在 GitHub 仓库页面，按 `.` 键（点号）打开网页编辑器，按 Ctrl+Shift+H 全局搜索替换：
- 搜索 `020-8888 6666` → 替换为真实电话
- 搜索 `info@chuangyi-it.com` → 替换为真实邮箱
- 搜索 `粤ICP备XXXXXXXX号` → 替换为真实备案号

---

## 五、常用操作速查

| 要做什么 | 在哪里改 | 搜索关键词 |
|----------|----------|-----------|
| 改电话号码 | 所有页面footer | `8888` |
| 改邮箱 | 所有页面footer | `chuangyi` |
| 改公司地址 | contact.html + 所有footer | `天河区` |
| 改备案号 | 所有页面footer | `粤ICP备` |
| 改统计数据 | index.html | `data-count` |
| 改团队成员 | about.html | `team-grid` |
| 改资质证书 | qualifications.html | `qual-grid` |
| 改工程案例 | cases.html | `cases-grid` |
| 上传宣传片 | videos/目录 | - |
| 上传宣传PPT | docs/目录 | - |
| 上传案例照片 | images/cases/ | - |
| 上传证书照片 | images/certificates/ | - |
| 上传团队照片 | images/team/ | - |

---

*最后更新：2026年6月*
