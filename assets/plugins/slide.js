jQuery.extend({
    Scroll: function(settings) {
        //��ʼ������
        var config = $.extend({
            stepWidth: 100,         // ��������
            waitTime: 4000,         // ��Ъʱ��
            animateTime: 500,       // ����Ч��ʱ��,������Ӧ�ñȼ�Ъʱ���
            inner: "",              // ��������
            left: "",               // ��������
            right: "",              // �ҵ������
            autoScroll: false       // �Ƿ��Զ���
        }, settings);

        //���
        $(config.left).click(function() { AutoScroll(); });
        //�ҹ�
        $(config.right).click(function() { RightScroll(); });
        if(config.autoScroll) {
        	//�Զ���
        	var flag = setInterval(AutoScroll, parseInt(config.waitTime));
	        //��ͣ
	        $("" + config.left + "," + config.right + "," + config.inner + "").hover(function() { clearInterval(flag) }, function() {
	            flag = setInterval(AutoScroll, parseInt(config.waitTime));
	        });
        }
        function AutoScroll() {
            var marginLeft = $(config.inner).css("margin-left");
            $(config.inner).stop().animate({ "margin-left": parseInt(marginLeft) - config.stepWidth }, config.animateTime, function() {
                var n = $("li").toArray(); //ת��Ϊ��������
                var k = $.grep(n, function(i, j) { return j > 0; }); //ɸѡ
                var temp = $.grep(n, function(i, j) { return j > 0; }, true); //ɸѡ
                $(config.inner).children("ul").html(""); //���
                $(k).each(function(i, j) {
                    $(config.inner).children("ul").append(j); //����ƴװ����
                });
                $(config.inner).children("ul").append(temp); //ƴװ��ɸѡ��ȥ�Ķ���
                $(config.inner).css("margin-left", 0); //��ʼ��marginleft
            });
        }
        function RightScroll() {
            //������Ҫ��ƴװ���ƶ�
            var marginLeft = $(config.inner).css("margin-left");
            var n = $("li").toArray(); //ת��Ϊ��������
            var k = $.grep(n, function(i, j) { return j < n.length - 1; }); //ɸѡ
            var temp = $.grep(n, function(i, j) { return j > n.length - 1; }, true); //ɸѡ
            $(config.inner).children("ul").html("").append(temp); //ƴװ��ɸѡ��ȥ�Ķ���
            $(k).each(function(i, j) {
                $(config.inner).children("ul").append(j); //����ƴװ����
            });
            $(config.inner).css("margin-left", -config.stepWidth);
            //
            $(config.inner).stop().animate({ "margin-left": parseInt(marginLeft) }, config.animateTime);
        }
    }
});