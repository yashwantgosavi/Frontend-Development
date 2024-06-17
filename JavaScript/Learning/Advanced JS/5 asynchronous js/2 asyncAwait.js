// asyncAwait introduce in ES7 version, it helps us to deal with promises very easily

async function x() {
    try{
      await Promise.reject("Rejected!!")
    } catch(e) {
      console.log(e)
    }
  }
  console.log(x());