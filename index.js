class Formatter {
  static capitalize(string) {
  	return string[0].toString().toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
  	return string.replace(/[^A-Za-z0-9- ']+/g, "");
  }

  static titleize(string) {
  	let stringArray = string.split(" ");
  	let notCapitalizedArray = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

  	let result = []

  	for (let i = 0; i < stringArray.length; i++) {
		if (i == 0) {
			result.push(this.capitalize(stringArray[i]))
		} else if (notCapitalizedArray.includes(stringArray[i])) {
			result.push(stringArray[i])
		} else {
			result.push(this.capitalize(stringArray[i]))
		}
	}
	return result.join(" ")
  }
}