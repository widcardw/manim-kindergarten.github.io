<Back url='/docs' />

# manim 从没入门到被劝退

> 鹤翔万里\
> Manim-Kindergarten\
> 版本：1.0\
> 更新：2021 年 8 月 26 日

<Logo />

[[toc]]

## 前言之前

### 如何提问

1. 在 mk 技术群中提问，请尽量不要提出 python 基础语法相关的问题，或者与 manim 本身关系不大的问题。详见《manim 常见问题》的“如何提问”部分。
2. 在 mk 前哨站中提问，你可以随意提出 python 基础相关的问题，尽量少提出 manim 相关问题。如果是咨询报错原因的话，请在提问时给出完整代码和完整报错信息。
3. 听从劝告，这些都是为了你好，群友的劝告（以及这个文档中的内容）也是为了让你的学习曲线变得平缓。
4. 语气友善，态度谦虚，避免造成不必要的纠纷。
5. <span text="red">关于如何运行傅里叶场景，除非提问者按照其数学原理，从零开始，自己动手编写代码实现，否则一概不予回复。</span>

## 前言

这个文档和其他文档会有稍稍那么一点不一样，这个文档不会教大家怎么处理安装/学习 manim 中遇到的各种问题，不会给大家提供 manim 方面的教程。而是在大家想要入坑 manim 前给出一些警告（~~劝退~~）这个坑真的很深，慎入。

对于任何想要从零开始学习 manim 的朋友，都真诚地希望你可以完整地看完整篇文档，然后再决定是否要踏入到 manim 这个深坑里。（~~当然，如果你决然不看这个文档，我也没什么办法，那你就只好自求多福了~~）对于有编程基础的、自学能力强的朋友，以及部分勇士，也可以不看这个文档直接上手 manim。

当然也请注意，这篇文档中所说的都是事实，没有任何夸张的成分。

## 1. 使用目的

在入手 manim 之前，你应该首先明确你要使用 manim 的目的是什么。我相信大部分人使用 manim 都是想制作科普视频，但是你想要以一种什么样的形式来呈现你想要讲述的内容。manim 的优势在于使用程序来精准地制作动画、来对晦涩的理论进行可视化呈现，而不仅仅是呈现公式、进行公式之间的简单变换。

manim 的创造者 Grant 在哔哩哔哩百万粉丝问答视频中也说过：

> Where I get a little bit **worried** as if I see people use it in a way that feels like you really didn’t need programmatic animations. … But if I see someone else use it **only for that, only to like write equations and manipulate it**. I kind of feel like they should make sure they’ve explored the full space of tools before they dive into that one in particular.

> 翻译：如果人们在不适合程序动画的地方使用 manim 的话，我会比较头疼。……如果看到有其他人真就只用 manim 来书写公式、处理公式。我没准会想，他们应该先研究清楚各种工具的能力，再决定入谁的坑。

所以如果仅仅是为了书写文字书写公式来用 manim 的话，不如使用 PowerPoint 等更加直观方便的软件，它们达到的效果也不差（这仅仅取决于个人的审美和能力，与软件无关）。如果是为了呈现图像的话，geogebra 等软件甚至会比 manim 更加方便，更加好看。

总而言之，请你想清楚为了你的目的来学习**使用 manim 是否值得**，是否有其它更合适、简单的软件可以替代达到你的目的。

## 2. 面向人群

manim 并不是一个像 Microsoft Office 等可以直接上手使用的软件，它是一个 **python 的模块包**。**manim 不是你心血来潮想用就可以使用的**，学习使用它有一定的门槛，有很明显的面向人群：

- 有一定的编程基础，特别是 python 基础
- 会使用终端运行命令
- 可以通过看文档或源码自学

如果想要更好地、更深入地学习 manim，你需要下一节所说到的技术栈。

## 3. 所需要的技术栈

### 3.1. 仅仅是学习使用

下面的这些知识都要在开始学习 manim 前确保掌握，不然在学习、使用过程中会出现非常多的问题。

-   **Python 基础语法（至少要学习到类，不必对面向对象了解太多）**
    这是当然的，因为 manim 是一个 python 的库，它使用 python 编写，也需要使用 python 语言来编写动画
-   $\LaTeX$ **公式语法**
    如果你想要在你的视频中添加数学公式，你还需要了解 LATEX 的公式语法
-   **终端/命令行的基础使用方法**
    因为 manim 是通过在终端中输入命令来运行的，所以你需要了解终端的使用方法，以及一些基础的命令（如 cd、python、pip 等）
-   **有关计算机环境变量的用途及用法**
    在安装 manim 时，会多次涉及到将二进制文件或文件夹添加到系统环境变量的操作。所以你要懂得环境变量的用途，以及如何设置它们

### 3.2. 想要阅读、看懂源码

如果想要进一步地学习，当然就要看 manim 的源码。所以想要更深入地研究 manim，需要的技术栈还要更进一步。

-   **Python 面向对象知识**
    因为 python 是一门面向对象的语言，manim 的源码中也几乎全是 class，所以为了更好地理解 manim，一定需要 python 的面向对象知识（至少要了解类与方法、继承、重载等知识）
-   **扎实的数理基础**
    由于 manim 中的坐标处理、变换等都是通过矩阵、甚至四元数等运算完成的，所以理解 manim 源码，也需要有扎实的数理基础，懂得 python 的数值计算包 NumPy 的基本用法。
-   $\LaTeX$ **语法以及用法**
    manim 中用于书写文字的 `Tex` 和 `TexText` 类都使用 $\LaTeX$ 来进行渲染，所以你需要 $\LaTeX$ 语法的知识才能更好地理解它们之间的区别与用法；也需要 $\LaTeX$ 的使用方法才能更好地理解 manim 是如何通过输入的字符串来呈现在画面中的
-   **FFmpeg 的用途及用法**
    manim 使用 FFmpeg 来生成视频，所以想要完全理解 manim 的原理也需要了解一些 FFmpeg 的相关知识
-   **OpenGL 及 GLSL 的基础知识**
    新版 manim（ManimGL）使用 OpenGL 作为后端渲染，也使用到了 GLSL 语言，所以要读懂 manim 源码也需要一些这方面的基础知识
-   **git 及 GitHub 的简单用法**
    由于 manim 在 GitHub 上开源，使用 git 来进行版本控制，所以有了这些基础会更加方便 manim 的深入学习

## 4. 可能遇到的问题

manim 还不太成熟，所以在使用过程中会出现各种各样的问题，包括但不限于：

-   《manim 常见问题》《manimgl 常见问题》两个文档中的所有问题（~~很可怕吗？是的，很可怕.gif~~）
-   Python 语法上的奇怪问题
-   运行命令方面的问题
-   新版显卡/显卡驱动导致的甚至无法渲染的问题
-   macOS Big Sur 上 python 及 OpenGL 适配不好，需要手动解决的问题
-   以及一些目前尚未解决的问题（比如文字三角剖分问题，边缘断齿问题，文字大小换行问题⋯⋯）
-   ⋯⋯
-   长时间无法解决问题导致心理破防的问题

所以请在入坑 manim 前慎重考虑自己能否承受、解决遇到的种种问题。虽然有群友、社区为你解答你可能遇到的问题，但是还是有部分问题我们也是无能为力的。

## 5. 学习方式

因为 manim 是一个代码库，所以最好的学习方式是**看文档**。但目前文档也并不完善，所以最好的学习方式变成了**阅读源码**，只要是想深入地学习 manim，一定避不开阅读源码。即使 manim 的结构比较清晰，源码不太复杂，但是初学者即使有些 python 的基础，刚开始阅读 manim 源码也是会有很多困难的。

所以你也需要想清楚，你能否坚持忍受困难，啃下 manim 源码；或者通过不断地使用来了解越来越多的用法，到最后浏览源码学习。

## 6. 准备好了？

什么？你已经有了面对疾风、入坑 manim 的觉悟了？那么就从《manim常见问题》和《manimgl 常见问题》以及文档 <https://docs.manim.org.cn> 开始吧，里面都有很好的入门教程，学习愉快啦！

## 7. 算了算了。

如果你看过上面的内容觉得自己不适合入坑 manim 了，也不用气馁，因为它确实不是面向所有人的。并且也完全不是没有方法来制作科普视频。你还有更多的替代方案：

-   Adobe Premier Pro、After Effects 等软件
    虽然 Adobe 全家桶也很难入门，但是它们也有着更高的灵活度，比 manim 稍平的学习曲线，使用 Pr、Ae 等专业软件也完全可以达到更好的视觉效果
-   Microsoft PowerPoint，Apple Keynote 等软件
    即幻灯片，它们的动画效果也不错，可以插入图形、文字、甚至公式。而且它们更容易使用，更直观。只要肯下功夫，使用 PPT 也是可以做出媲美 manim 的动画的
-   Blender、C4D 等 3D 软件
    manim 在 3D 方面很拉垮，所以这些优秀的 3D 软件是很好的选择，同时它们也都可以直接渲染出动画，用来制作 3D 视频效果非常棒 
-   GeoGeBra，desmos，Mathematica，Matlab 等软件
    这些专业的数学软件也可以方便地绘制图形，制作动画。只要合理地录制、剪辑，制作出来的效果也是非常好的
-   ……
    还有更多的工具等待你发掘，只要配合好录屏、剪辑，一切工具都可以做出优良的视频

<Back url='/docs' />
