import { browser, by, element } from 'protractor';

export class CoffeOrder {
  /**
   * 
   * @param string Given string will be returned first character uppercased.
   */
  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
  * 
  * @param string Given string will be returned first character lowercased.
  */
  jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  navigateTo(){
    return browser.get('/');
  }

 add_americano(){
   return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div > button')).click();
 }
 add_white(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div > div > button')).click();
}
add_chaitea(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(2) > div:nth-child(3) > div > div > button')).click();
}
add_latte(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(2) > div:nth-child(4) > div > div > button')).click();
}

remove_americano(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div:nth-child(1) > div > div > button')).click();
}
remove_white(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div:nth-child(2) > div > div > button')).click();
}
remove_chaitea(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div > div > div > button')).click();
}
remove_latte(){
  return element(by.css('body > app-root > app-coffe-order > div > div > div > div > div:nth-child(5) > div:nth-child(4) > div > div > button')).click();
}

 getPriceText(){
   return element(by.css('body > app-root > app-coffe-order > div > div > div > div > p.font-size-24.price')).getText();
 }

 buy(){
  element(by.css('body > app-root > app-coffe-order > div > div > div > div > p:nth-child(7) > button')).click();
 }
 accept_alert(){
  browser.switchTo().alert().accept();
 }
 
 getBuyButtonStatus(){
   return element(by.css('#buy-button')).isEnabled();
   
 }
 getPageTitleText(){
   return element(by.css('#coffe-title')).getText();
 }

}
