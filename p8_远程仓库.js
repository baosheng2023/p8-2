/*
    远程仓库（remote）
        目前我们对于git所有的操作都是在本地进行的，在开发中显然不能这样的，这时我们就需要一个远程的git仓库。
            远程的git仓库和本地的本质没有什么区别，
            不同点在于远程的仓库可以被多人同时访问使用，方便我们协同开发。
        在实际工作中，git的服务器通常由公司搭建内部使用或是购买一些公共的私有git服务器，
            我们学习阶段，直接使用一些开放的公共git仓库。目前我们常用的库有两个：
                Github
                Gitee（码云）
        Github
            注册：baosheng2023
            使用仓库：
                1.vscode --> Publich Branch(发布Branch)
                2.手动创建仓库
                    GitHub --> 
                    Start a new repository
                        - baosheng2023/xxx 
                        - Public
                        - Create a repository
            将本地库上传git：
                git remote add origin https://github.com/baosheng2023/gitdemo.git
                    git romote add <remote name> <url>
                git branch -M main
                    修改分支的名字为main
                git push -u origin main
                    git push 将代码上传到服务器上
            下载
                code --> 复制地址 -->
                命令行输入：git clone <url>
            删除库
                settings
        码云
            注册：zjlnhm
            新建仓库：
                仓库名称
                私有
                创建
            将本地库上传Gitee
                //git remote add orgin https://gitee.com/zjlnhm/gitdemo.git
                    git remote add gitee https://gitee.com/zjlnhm/gitdemo.git
                //git push -u origin "master"
                    git push -u gitee main
        下载
            克隆/下载 -- 复制地址
            命令行输入：git clone <url>
        删除库
            管理 --> 删除仓库 -->
            删除仓库 --> 输入路径 --> 确认删除 -->
            输入密码 --> 验证
        李立超代码码云地址：https://gitee.com/ymhold/vue-course.git
            
*/ 