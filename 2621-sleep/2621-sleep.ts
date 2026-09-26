async function sleep(millis: number): Promise<string> {
    const p = await new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('success')
        }, millis)
    })

    return p
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */