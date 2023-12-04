import pygame
from pygame.locals import *

pygame.init()

# 设置窗口大小
screen = pygame.display.set_mode((800, 600))

# 加载背景图片
background = pygame.image.load("background.jpg")

# 加载玩家图片
player = pygame.image.load("player.png")
player_rect = player.get_rect()
player_rect.topleft = (100, 500)

# 加载文字图片
text = pygame.image.load("text.png")
text_rect = text.get_rect()
text_rect.centerx = 400
text_rect.centery = 300

# 创建输入框
input_box = pygame.Rect(400, 550, 200, 30)
color_inactive = pygame.Color('lightskyblue3')
color_active = pygame.Color('dodgerblue2')

# 游戏循环
running = True
while running:
    screen.blit(background, (0, 0))
    screen.blit(player, player_rect.topleft)
    screen.blit(text, text_rect.topleft)

    for event in pygame.event.get():
        if event.type == QUIT:
            running = False
        elif event.type == KEYDOWN:
            if input_box.collidepoint(event.pos):
                if event.key == K_RETURN:
                    if text_rect.get_text() == input_box.text:
                        pygame.display.update()
                        pygame.time.wait(2000)
                        pygame.quit()
                        sys.exit()
                else:
                    input_box.edit(event.unicode)
                    color = color_active if input_box.text else color_inactive
                    input_box.fill(color)

    pygame.display.update()
pygame.quit()
