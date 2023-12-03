'''
游戏的功能描述
1. 显示虚化的 background.jpg 作为游戏背景
2. 显示一个玩家,在左下角
3. 显示一段文字在窗口正中间
4. 显示一个输入框,在窗口正下方
5. 玩家可在输入框输入信息,当信息与正中间显示的文字相同时,弹窗显示"闯关成功"
'''

import pygame
import sys
from PIL import Image, ImageTk

# 初始化pygame
pygame.init()

# 设置窗口尺寸
window_size = (600, 400)
screen = pygame.display.set_mode(window_size)

# 设置窗口标题
pygame.display.set_caption("闯关游戏")

# 加载背景图片
background = Image.open("background.jpg")
background = background.resize((600, 400))
background_photo = ImageTk.PhotoImage(background)

# 创建文字Label并设置文字内容、字体等样式
text_label = tk.Label(root, text="这是一段预设的文字", font=('Arial', 24), 
                     wraplength=200, justify='center')
text_label.pack(side=tk.TOP, fill=tk.BOTH, expand=True)

# 创建输入框并设置初始焦点
entry = tk.Entry(root)
entry.pack()
entry.focus_set()

# 创建按钮并设置点击事件处理程序
button = tk.Button(root, text="检查", command=check_input)
button.pack()

# 游戏主循环
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    screen.blit(background, (0, 0))  # 显示背景图片
    text_label.draw()  # 显示文字Label
    entry.draw()  # 显示输入框
    button.draw()  # 显示按钮
    pygame.display.flip()  # 更新整个窗口表面到屏幕
