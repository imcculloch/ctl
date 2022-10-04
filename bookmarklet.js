regex = /G\. ?L\. ?c. (\d+), ?§ ?(\d+) ?/g

replace_str = '<a href="https://malegislature.gov/laws/generallaws/Chapter$1/Section$2"> target link = G.L. c. $1 § $2 </a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);

regex = /(\d+) U\.S\.C\. § (\d+)( \(\d{4}\))?/g

replace_str = '<a href="https://www.law.cornell.edu/uscode/text/$1/$2">$1 U.S.C. § $2$3</a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);

regex = /M(\.| )?P(\.| )?E(\.| )?P(\.| )?§?(\d+)/g

replace_str = '<a href="https://www.uspto.gov/web/offices/pac/mpep/s$1"> MPEP § $1</a>'

document.body.innerHTML = document.body.innerHTML.replace(regex, replace_str);
