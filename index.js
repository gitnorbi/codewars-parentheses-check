function validParentheses(parens){
    let result=parens;
    if(parens.length%2===0){
    if(parens.indexOf("(")===0 && parens.lastIndexOf(")")===parens.length-1){
        for(let i=0; i<=parens.length+1;i++){
            if(result.indexOf("(") < result.indexOf(")") && result.indexOf("(")!=-1 ){
                let firstLocationOfOpeningBracket=result.indexOf("("); 
            let removeFirtsOpenningBracet=result.slice(0, firstLocationOfOpeningBracket) + 
            result.slice(firstLocationOfOpeningBracket+1, result.length)
            let firstLocationOfClosingBracet=removeFirtsOpenningBracet.indexOf(")");
           result=removeFirtsOpenningBracet.slice(0, firstLocationOfClosingBracet) + 
           removeFirtsOpenningBracet.slice(firstLocationOfClosingBracet+1, result.length)
            }
        }

    }
}




    if (result===""){
        document.getElementById("result").innerText+=`The order of the parentheses is valid.
        for ${parens}`;
        return true
    }else{
        document.getElementById("result").innerText+=`The order of the parentheses is not valid.
        for ${parens}`;
        return false
    }
   
    
  }
  
  validParentheses("()))")

  /*
Test cases:

0.
()()((()
this is false 

1.
()
this is true 

2.
()()
this is true 

3.
(())
this is true 

4.
)
this is false 

this is true 

5.
())
this is false 

6.
((((()))))
this is true 

7.
()))
this is false 

8.
()()()())
this is false 

9.
(()()()())(())
this is true 

10.
((((((((
this is false 

11.
(())((()((()))))
this is true 

12.
())(
this is false 

13.
)()()()(
this is false 

14.
(()()))(
this is false 

15.
)()(
this is false 

16.
())(()
this is false 

17.
())(()
this is false 

Random tests
18.
()()()(())
this is true 

19.
()()()
this is true 

20.
()()()()()()()()()()()()()
this is true 

21.
()()()()()()()()()()()()()()()()()()((
this is false 

22.
(())()(())((()
this is false 

23.
()()()()()()()()(())()()()()()()()()(())
this is true 

24.
()()(())
this is true 

25.
()((()))
this is true 

26.
()()()()(()()())()()()()()
this is true 

27.
(())()()()()()()
this is true 

28.
(())()()()()(())()()()()()()(()()())()((
this is false 

29.
()()()(())()()
this is true 

30.
()()(())(())()()()(()(
this is false 

31.
()()()()(())()()(())()
this is true 

32.
()()()()()()()()()(())()()()()()
this is true 

33.
()((()))()()(())()()()()(())()()(())
this is true 

34.
()()()()()()()()
this is true 

35.
()()()()()()()()
this is true 

36.
()()(())
this is true 

37.
()()()()
this is true 

38.
((()))()()()()()()()()(()())((
this is false 

39.
()()()()()()()()()()(()())(())()
this is true 

40.
((())())()()()()()()(()())()()()()()
this is true 

41.
()()()()()()
this is true 

42.
()((
this is false 

43.
(())
this is true 

44.
(())()
this is true 

45.
()()()()(())()()(())()(())()()()
this is true 

46.
()()(())(())()()()()()
this is true 

47.
()()()
this is true 

48.
()()()()(())()()()((
this is false 

49.
()(())()()()()(())()()()()()()(())()()
this is true 

50.
(())((()))()()()()()()()()((())())(())
this is true 

51.
()(())()()()()()()()
this is true 

52.
()()()
this is true 

53.
()(())(())()()()()()()()()()()
this is true 

54.
()()(()())()()()()()()()
this is true 

55.
()()()(()())(())()()()()(())()()()()
this is true 

56.
()()()()()(())()()()()()()()((
this is false 

57.
()()()()()()()()()()()()()()()()
this is true 

58.
()(())
this is true 

59.
()()()()()()()()()()()()()()()()()
this is true 

60.
()()()(())()()()()()(())
this is true 

61.
()(())()()()(())()
this is true 

62.
()(()(())())()(())()()()()()()()()()
this is true 

63.
()()()()()()
this is true 

64.
()()()(())()()()((
this is false 

65.
()()(())()()()()()()()()()()()()()((
this is false 

66.
()()()()()()()()()()()()()()()()()()
this is true 

67.
()
this is true 

68.
()()()()()()(())()()()()()()
this is true 

69.
()()()()(())()()()()()()(())()()()()()
this is true 

70.
(())()()(())()()()()()()()()()()()
this is true 

71.
()()()()()()
this is true 

72.
()()()()()()()(())()()()()()()
this is true 

73.
()()(())()()()()(())()
this is true 

74.
()()()()()()()()(())(()())()()()()()()
this is true 

75.
()()()()(((())()))
this is true 

76.
()()()()()()()
this is true 

77.
()()
this is true 

78.
(()())()()()()(())()()()()()()()()()
this is true 

79.
()()()()()()()()()(())
this is true 

80.
()()()()
this is true 

81.
()()(())()(())()()()()
this is true 

82.
()()()(()())()()()()()
this is true 

83.
()()()()()
this is true 

84.
()()()()()()
this is true 

85.
(()())(())()()()()()()()()()()()(())()
this is true 

86.
()()()
this is true 

87.
()(())((
this is false 

88.
()()(())()()()()()()()()()(())()(()())((
this is false 

89.
(()())()
this is true 

90.
()(())()()()
this is true 

91.
()()()()()()()()()()()()()()()
this is true 

92.
()(())()()()()
this is true 

93.
()()(())(())
this is true 

94.
()()()()()()()()()()
this is true 

95.
(())()
this is true 

96.
()
this is true 

97.
(())()()()(())()()()()(())
this is true 

98.
()((()
this is false 

99.
()()(())()()()()()()()()()()()()
this is true 

100.
()()(())()()()()(())()()()()((
this is false 

101.
(()())()()
this is true 

102.
(())()()()()()()()(())(())()()()()(())()
this is true 

103.
()()()()()()()(())()()()()(())(())()
this is true 

104.
()()()()()(())
this is true 

105.
()()
this is true 

106.
(())(())()()()((
this is false 

107.
(()())()(())()(())()()()()
this is true 

108.
()()()()()()()()()(())()(())()()()((
this is false 

109.
()()()()()()()()()()(())()()()()
this is true 

110.
()()
this is true 

111.
()()(())()()()()()
this is true 

112.
()()()()(())
this is true 

113.
()
this is true 

114.
()()()()()()()()()()()()()
this is true 

115.
()(())()()()
this is true 

116.
(())()()()()()()
this is true 

117.
()()()()()()(()()())()()()()
this is true 
  
  
  */

 
  
  