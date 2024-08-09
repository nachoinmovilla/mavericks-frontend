import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { postContact } from '@/services/contacts/contacts.service';
import React, { useState } from 'react'
import { BiSave } from 'react-icons/bi';

const Create = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [phone2, setPhone2] = useState('')
    const [address, setAddress] = useState('')

    const [textButton, setTextButton] = useState('Save changes')
    const [isError, setIsError] = useState(false)

    const handleSaveChanges = () =>{

        let json ={
            name,
            last_name: lastName,
            birth_date: birthday,
            email,
            phone,
            phone2,
            address
        }

        postContact(json).then(res=>{
            console.log("res", res)
            if(res?.data?.success){
                setIsError(false)
                setTextButton("Saved succesfully!")
                setName('')
                setLastName('')
                setBirthday('')
                setEmail('')
                setPhone('')
                setPhone2('')
                setAddress('')
            }else{
                setIsError(true)
                setTextButton('Error saving this contact')
                setTimeout(() => {
                    setIsError(false)
                    setTextButton('Save Changes')
                }, 3000);
            }
        })
    }

    return (
        <Layout>
            <div className='space-y-4'>
                <div className='space-y-4 bg-white p-4 rounded'>
                    <div className='font-semibold text-3xl'>
                        Create Clients
                    </div>
                    <div className='grid grid-cols-3 gap-8'>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Name
                            </div>
                            <Input 
                                className="w-full" 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="John"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Last Name
                            </div>
                            <Input 
                                className="w-full" 
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                                placeholder="Smith"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                BirthDay
                            </div>
                            <Input 
                                className="w-full" 
                                value={birthday}
                                onChange={(e)=>setBirthday(e.target.value)}
                                placeholder="11-11-1999"
                                type="date"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Email
                            </div>
                            <Input 
                                className="w-full" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="johnsmith@gmail.com"
                                type="email"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Phone
                            </div>
                            <Input 
                                className="w-full" 
                                value={phone}
                                onChange={(e)=>setPhone(e.target.value)}
                                placeholder="678 982 374"
                                type="number"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Phone 2
                            </div>
                            <Input 
                                className="w-full" 
                                value={phone2}
                                onChange={(e)=>setPhone2(e.target.value)}
                                placeholder="678 982 374"
                                type="number"
                            />
                        </div>
                        <div className='space-y-2'>
                            <div className='font-medium'>
                                Address
                            </div>
                            <Input 
                                className="w-full" 
                                value={address}
                                onChange={(e)=>setAddress(e.target.value)}
                                placeholder="C. Example 2"
                            />
                        </div>
                    </div>
                </div>
                <div className='justify-end flex'>
                    <Button variant={isError ? 'destructive' : 'default'} onClick={handleSaveChanges}>
                        <BiSave /> <span className='ml-2'>{textButton}</span>
                    </Button>
                </div>
            </div>
        </Layout>
    );
}

export default Create;