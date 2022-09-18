			function animate(obj, target, callback) {
				clearInterval(obj.timer);
				//排他操作
				obj.timer = setInterval(function() {
					if (obj.offsetLeft == target) {
						clearInterval(obj.timer)
						if(callback) {
							callback();
						}
					}
					var i = (target - obj.offsetLeft)/10;
					if(i > 0) {
						i = Math.ceil(i)
					}
					else {
						i = Math.floor(i)
					}
					console.log(i);
					//如果步长为正，向上取整，否则向下取整
					obj.style.left = obj.offsetLeft + i + 'px';
				}, 15)
				// 封装一个动画函数
			}
