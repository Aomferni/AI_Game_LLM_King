// 获取游戏画布元素
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');

// 设置游戏画布大小和背景图
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;
ctx.drawImage('background.jpg', 0, 0, gameCanvas.width, gameCanvas.height);

// 定义游戏角色和文字提示
const player = { x: 50, y: 50, image: 'player.png' };
const textPrompt = { text: '输入文字', x: gameCanvas.width / 2, y: 200 };
const inputField = { x: gameCanvas.width / 2, y: 250, width: 200, height: 50 };
const successMessage = '闯关成功';
const memory碎片收藏窗口 = { x: gameCanvas.width / 2, y: 50, width: 200, height: 200 };
const heartMeter = { x: gameCanvas.width - 100, y: 50, width: 100, height: 50 };
let heartValue = 10; // 心力初始值
const memoryFragments = []; // 记忆碎片数组
let currentFragmentIndex = 0; // 当前记忆碎片索引

// 绘制游戏角色和文字提示
ctx.drawImage(player.image, player.x, player.y);
ctx.fillStyle = 'white';
ctx.fillText(textPrompt.text, textPrompt.x, textPrompt.y);
ctx.strokeRect(inputField.x, inputField.y, inputField.width, inputField.height);
ctx.fillText('请输入文字', inputField.x + 10, inputField.y + 10);
ctx.fillText(successMessage, gameCanvas.width / 2, gameCanvas.height - 50);
ctx.fillRect(heartMeter.x, heartMeter.y, heartMeter.width, heartMeter.height);
ctx.fillText(`心力: ${heartValue}`, heartMeter.x + heartMeter.width / 2, heartMeter.y + heartMeter.height / 2);

// 游戏循环函数
function gameLoop() {
    // 处理输入框输入事件和点击事件
    if (event.type === 'keydown' && event.key === 'Enter') { // 按Enter键提交输入内容并检查是否匹配文字提示
        const inputText = document.getElementById('inputField').value; // 获取输入框内容
        if (inputText === textPrompt.text) { // 如果匹配成功，显示成功消息并增加记忆碎片数量
            alert(successMessage);
            memoryFragments[currentFragmentIndex] = inputText; // 将输入内容添加到记忆碎片数组中（这里假设数组已初始化）
            currentFragmentIndex++; // 增加当前碎片索引，如果到达数组末尾则重新开始计数
        } else { // 如果匹配失败，显示错误消息并消耗心力值（这里假设心力值可以消耗）
            alert('输入错误！'); // 这里可以添加更具体的错误提示信息，如提示输入的文字不正确等。消耗的心力值可以根据具体情况进行调整。
            heartValue--; // 这里假设每次输入错误都会消耗1点心力值，可以根据具体情况进行调整。如果心力值小于等于0，可以显示一个提示消息，例如：“你的心力已经用尽！”然后结束游戏。这个判断可以放在游戏循环的开头，这样就不会消耗心力和玩家一样了。但是在这里我们为了简化代码没有添加