---
layout: single
title:  "테스트 페이지"
---

# I made second post

<script type="text/javascript">
function drawSine() {
commandURI="matlab:t=linspace(0,1,100);";
commandURI+="plot(t,";
commandURI+=document.sine.amplitude.value;
commandURI+="*sin(t*2*pi*";
commandURI+=document.sine.frequency.value + ")";
commandURI+=",'" + document.sine.color.value +
document.sine.linestyle.value +
document.sine.markerstyle.value + "'";
commandURI+=");";
document.location=commandURI;
}
</script>
