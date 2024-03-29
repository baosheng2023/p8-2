/*
    分支
        git在存储文件时，每一次代码的提交都会创建一个与之对应的节点，
            git就是通过一个一个的节点来记录代码的状态的，
            节点会构成一个树状结构，树状结构意味着这个树会存在分支，
            默认情况下仓库只有一个分支，命名为master。
            在使用git时，可以创建多个分支，
                分支与分支之间相互独立，在一个分支上修改代码不会影响其他分支
        git log 查看日志 q 结束        
        git branch 查看当前分支
        git branch <branch name>    创建新的分支
        git branch -d <branch name> 删除分支
        git switch <branch name>    切换分支
        git switch -c <branch name> 创建并切换分支
        在开发中，都是在自己的分支上编写代码，代码编写完成后，再将自己的分支合并到主分支中
        合并分支
            合并的方式有两种：
                方式一：
                    git switch <目标分支名>         切换到目标分支
                    git mergr <要合并的分支名>      将要合并分支合并到目标分支上
                        合并过程中有冲突，手动编辑冲突文件，然后在再提交
                    git branch -d <要合并的分支>    删除要合并的分支
            
*/ 