// metacharacters
let name = /modi/
// lets look into some metacharacters symbols
name = /^mod/ // ^ means expr will match if string sstarts with
name = /d$/ // $ at the end of the expr means string ends with
name = /m.d/ // macthes any one character
name = /m*di/ // matches any 0 or more characters
name = /mo?dig?/ // ? after character means char are optional
name = /m\?di/ // \symbol will exactly match the expr

let st = 'yyuio help be a good pm m?di'
let res = name.exec(st)
console.log(res)
let res1 = name.test(st)
console.log(res1)


if (res1) {
    console.log(`the string ${st} matches the regex ${name.source}`)
} else {
    console.log(`the string ${st} do not matches the regex ${name.source}`)
}