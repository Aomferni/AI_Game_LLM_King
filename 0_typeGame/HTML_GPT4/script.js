var heart = 10; //初始心力值
    var fragment = [] // 初始记忆碎片空数组

    document.getElementById('frame').onclick = function() {
      if (heart > 0) {
        fragment.push("舞蹈家");
        alert('你找到了记忆碎片：“舞蹈家”！')
        heart--; // 减少心力值
      } else {
        alert('心力不足！');
      }
    }

    document.getElementById('pocket').onclick = function() {
      alert('你的记忆碎片有：' + fragment.join(', ')); // 显示已获取的记忆碎片
    }

    function checkAnswer() {
      var answer = document.getElementById('inputBox').value;
      var prompt = document.getElementById('prompt').textContent;

      if (answer == prompt) {
        alert('闯关成功！');
      } else {
        alert('答案错误！');
      }
    }