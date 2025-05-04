Async function loadRSS() {
    Const CORS_PROXY = "https://api.allorigins.win/get?url="; // для обхода CORS
    Const RSS_URL = encodeURIComponent('https://example.com/rss.xml'); //  сюда RSS чужого сайта
    
    Try {
      Const response = await fetch(`${CORS_PROXY}${RSS_URL}`);
      Const data = await response.json();
      Const parser = new DOMParser();
      Const xml = parser.parseFromString(data.contents, "text/xml");
      
      Const items = xml.querySelectorAll("item");
      Let html = '';
  
      Items.forEach((item, index) => {
        If (index < 5) { // показываем только 5 новостей
          Const title = item.querySelector("title").textContent;
          Const link = item.querySelector("link").textContent;
          Html += `<p><a href="${link}" target="_blank">${title}</a></p>`;
        }
      });
  
      Document.getElementById('news').innerHTML = html;
    } catch (error) {
      Document.getElementById('news').innerHTML = "Не удалось загрузить новости.";
      Console.error(error);
    }
  }
  
  loadRSS();
  </script>
  