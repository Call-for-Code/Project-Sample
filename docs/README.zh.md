# 项目名称

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/solutions/projects/get-started/) [![Website](https://img.shields.io/badge/View-Website-blue)](https://sample-project.s3-web.us-east.cloud-object-storage.appdomain.cloud/)

本github repository可作为新的[Call for Code](https://developer.ibm.com/callforcode/)项目的模板并且为参与Call for Code和Linux Foundation部署方案中。您并不需要以下的全部章节，请结合您的实际需要选择适当的部分进行填充。另外请参加我们的[社区](https://developer.ibm.com/callforcode/solutions/projects/get-started/).

> 如果您是第一次参加开源活动，请阅读[free "Introduction to Open Source" class](https://cognitiveclass.ai/courses/introduction-to-open-source).
> 
> [![Open Source Foundations](images/open-source-foundations.png)](https://cognitiveclass.ai/courses/introduction-to-open-source)

_Read this in other languages: [English](README.md), [한국어](./docs/README.ko.md), [português](./docs/README.pt_br.md), [中文](./docs/README.zh.md)._ 

## 目录

- [项目名称](#项目名称)
  - [目录](#目录)
  - [摘要](#摘要)
    - [项目致力于解决的问题?](#项目致力于解决的问题)
    - [技术如何帮助解决问题?](#技术如何帮助解决问题)
    - [本创意](#本创意)
  - [演示视频](#演示视频)
  - [架构](#架构)
  - [细节描述](#细节描述)
  - [项目路线图](#项目路线图)
  - [快速开始](#快速开始)
  - [线上演示](#线上演示)
  - [技术列表](#技术列表)
  - [贡献](#贡献)
  - [版本](#版本)
  - [作者](#作者)
  - [许可证/LICENSE](#许可证/LICENSE)
  - [Acknowledgments](#acknowledgments)

## 摘要

### 项目致力于解决的问题?

世界卫生组织关于限制2019冠状病毒疾病进一步传播的指导方针的一部分是保持社交距离。因此，受影响最严重地区的学校正在采取预防措施，关闭其设施。由于学龄儿童在家待的时间不确定，让他们参与、并保持兴趣对他们的教育非常重要。

### 技术如何帮助解决问题?

学校和教师可以继续通过虚拟教室与学生互动，甚至为课堂创造互动空间。同时家长们面临着一种新的情况，他们可能需要在家教育他们的孩子，寻找合适的在线资源也很重要。

### 本创意

当教育机构在危机时期（如2019冠状病毒疾病大流行）不得不改变教学方式时，学习和创造必须继续下去。提供一套由IBM云和Watson服务支持的开源工具，将使教育者能够更轻松地为学生提供内容。

## 演示视频

[![观看视频](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## 架构

![视频翻译应用](https://developer.ibm.com/developer/tutorials/cfc-starter-kit-speech-to-text-app-example/images/cfc-covid19-remote-education-diagram-2.png)

1. 用户导航到站点并上传视频文件。
2. Watson Speech to Text处理音频并提取文本。
3. Watson Translation（可选）可以将文本翻译成所需的语言。
4. 应用程序将翻译后的文本作为文档存储在对象存储中。

## 细节描述

[更多细节请参考](./DESCRIPTION.md)

## 项目路线图

这个项目目前遵循以下路线图。

- 功能一
- 功能二
- 功能三

它位于免费的IBM云Kubernetes集群中。例如，未来我们计划在Red Hat OpenShift上运行。
我们提出的有关Call for Code 2021提交截止之后的计划见下文。

![路线图](./images/roadmap.jpg)

## 快速开始

在本节中，您需要添加在本地计算机上运行项目以进行开发和测试的说明。您还可以添加有关如何在生产中部署项目的说明。

- [react应用案例](./sample-react-app/)
- [angular应用案例](./sample-angular-app/)
- [其他](https://github.com/upkarlidder/ibmhacks)

## 线上演示

您可以在这个链接看到我们的线上展示系统 [callforcode.mybluemix.net](http://callforcode.mybluemix.net/).

有关登录凭据，请参阅我们提交的文件（不在此repo中）中的“详细描述”。

## 技术列表

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results) - The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) - The web framework used
- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## 贡献

有关我们的行为准则以及向我们提交pull请求的流程的详细信息，请阅读[贡献.md](CONTRIBUTING.md)。

## 版本

我们使用[SemVer](http://semver.org/)作为版本参考。对于可用版本，详见[项目tags](https://github.com/your/project/tags).

## 作者

<a href="https://github.com/Call-for-Code/Project-Sample/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=Call-for-Code/Project-Sample" />
</a>

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

## 许可证/LICENSE

本项目采用Apache 2 License，详见[LICENSE](LICENSE)文件。

## Acknowledgments

- Based on [Billie Thompson's README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
