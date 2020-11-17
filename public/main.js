let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                console.log(request.response)
                const object = JSON.parse(request.response)
                //把符合JSON语法的字符串变成对应的对象和其他东西
                myName.textContent = object.name
            }
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim());
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        // 创建div
        const div = document.createElement('div')
        // 填写div内容
        div.innerHTML = request.response
        // 插入到body里
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js') // readyState = 1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 下载完成，判断加载成功还是失败
            if (request.status >= 200 && request.status < 300) {
                // 创建script标签
                const script = document.createElement('script')
                // 填写script内容
                script.innerHTML = request.response
                // 插入到body里
                document.body.appendChild(script)
            }
            else {
                alert('加载JS失败')
            }
        }

    }
    request.send() // readyState = 2
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onload = () => {
        // 创建style标签
        const style = document.createElement('style')
        // 填写style内容
        style.innerHTML = request.response
        // 插入到head里
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send()
}
