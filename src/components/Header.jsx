import { Input } from "antd"

export default function Header({ setItemList, setLoading }) {
    
    const handleAdd = async (value) => {

        if(value.length < 3)

        setLoading(true) //turn on spinner

        //set object on app
        const newItem = {
            done: false, 
            userId: "me", 
            item: value, //what the user type in is "values"
        }
        
        //change method to post, what language what command (don't rememeber, google :} ), put it into JSON format
        const response = await fetch("https://express-deploy-vrc.web.app/items", { 
            method: "POST", 
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(newItem),
        })

        //gets updated list and turns off spinner
        const data = await response.json() //parse item and return in item list
        setItemList(data)
        setLoading(false)
    }

    return (
        <header>
            <Input.Search 
                allowClear
                enterButton="Add"
                size="large"
                onSearch={handleAdd}
                placeholder="Add new todo item"/>

        </header>
    )
}