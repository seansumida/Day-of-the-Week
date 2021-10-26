day = 10;
month = "August";
year = 2000;

if (month === "January" || month === "Febuary"){
    s1 = year - 1;
}else{
    s1 = year;
}
s2 = Math.floor(s1 / 4) + s1;
s3 = s2 - Math.floor(s1 / 100);
s4 = Math.floor(s1 / 400) + s3;
s5 = day + s4;
monthKey = {
    January:0,
    February:3,
    March:2,
    April:5,
    May:0,
    June:3,
    July:5,
    August:1,
    September:4,
    October:6,
    November:2,
    December:4
};
s6 = monthKey[month] + s5;
s7 = s6%7;

var weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

console.log(day + " " + month + " " + year + " was a " + weekday[s7])