/*    
    2.配置：
        使用git前，我们需要配置一下两个属性name和email，
            这两个信息会用来在存储代码时记录用户的身份。
        可以直接在命令行中通过指令来设置：
            name
                git config --global user.name "lilichao"                "mark"
            email
            git config --global user.email "27254174@qq.com"        "70458256@qq.com"
    3.使用git
        查看当前仓库的状态
            git status            
        初始化项目：
            git init
            默认情况下，磁盘中的文件并不由git管理，我们必须要对代码目录进行初始化，
                初始化后git才能正常的管理文件。
            进入目录后，直接在目录中执行git init即可完成项目的初始化，
            初始化后目录中会多出一个.git目录，这个目录用来存储代码的版本信息，
                有了.git就意味着项目现在已经开始被.git管理了，
            不希望项目被git管理时，只需删除项目中的.git即可。
        
            
*/ 