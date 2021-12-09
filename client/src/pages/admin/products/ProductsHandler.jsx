import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProducts, deleteProduct } from "../../../redux/apiCalls";
import { publicRequest } from "../../../requestMethods";


const ProductHandler = () => {
    const [userInput, setUserInput] = useState({
        title: "",
        img: "",
        description: "",
        categories: [],
        price: 0,
    });
    const dispatch = useDispatch();
    // const products = useSelector((state) => state.product.products);
    const [products, setProducts] = useState([]);


    //Get input values
    const handleChange = (e) => {
        e.persist();
        let value = e.target.value;
        let name = e.target.name;
        let cat = []

        if (name === "price") {
            setUserInput({ ...userInput, [name]: Number(value) });

        } else if (name === "categories") {
            cat.push(value);
            setUserInput({ ...userInput, [name]: cat });

        }
        else {
            setUserInput({ ...userInput, [name]: value });

        }

    };


    const handleClick = (e) => {
        e.preventDefault();
        console.log(userInput)
        addProduct(userInput, dispatch);

    }

    // const handleDelete = (id) => {
    //     deleteProduct(id, dispatch);
    // };


    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get("/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [products]);


    return (
        <Container>
            <Title>Legg til, endre, slett produkter. </Title>

            <Form>

                <FormTitle>Legg til nytt produkt</FormTitle>
                <Input type="text" name="title" placeholder="tittel.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="img" placeholder="bilde.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="description" placeholder="beskrivelse.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="categories" placeholder="kategori.." onChange={(e) => handleChange(e)} />
                <Input type="text" name="price" placeholder="pris.." onChange={(e) => handleChange(e)} />


                <Button backgroundcolor="#3E768C" color="white" hover="#558ba0" onClick={(e) => handleClick(e)}>
                    Send
                </Button>            </Form>



            <Table>
                <TBody>
                    <TableRoW>
                        <TableHead>Bilde</TableHead>
                        <TableHead>Tittel</TableHead>
                        <TableHead>Beskrivelse</TableHead>
                        <TableHead>Kategorier</TableHead>
                        <TableHead>Pris</TableHead>
                    </TableRoW>


                    {products.map((prod, index) => (
                        <TableRoW key={index}>
                            <TableD><Image src={prod.img} /></TableD>
                            <TableD>{prod.title}</TableD>
                            <TableD>{prod.description}</TableD>
                            <TableD>{prod.categories}</TableD>
                            <TableD>{prod.price} kr</TableD>
                            {/* <Button backgroundcolor="red" color="white" hover="#dd5353" onClick={(e) => handleDelete(e)}>
                                Slett
                            </Button> */}
                        </TableRoW>
                    ))}
                </TBody>
            </Table>


        </Container>
    )
}

export default ProductHandler


const Table = styled.table`
margin-top: 3em;
width: 80%;

`;

const TBody = styled.tbody`

`;


const TableRoW = styled.tr`
min-width: 100%;
padding: 1em;

`;

const TableHead = styled.th`
background-color: var(--color-1);
color: white;
padding: 1em;
width: 100%;
`;

const TableD = styled.td`
background-color: var(--color-4);
color: white;
padding: 1em;
min-width: 8em;
width: 100%;
`;

const Image = styled.img`
max-width:  10em;
max-height: 20em;
`;



const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 5em;
flex-direction: column;
`;

const Title = styled.h1`
font-size: 2rem;
color: black;
`;

const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: 0px 0px 15px 5px #000000;
width: 80%;
padding: 1em;
border-radius: 1em;
`;
const FormTitle = styled.h1`
font-size: 1.5rem;
color: black;
`;
const Input = styled.input`
flex: 1;
width: 90%;
padding: 1.5em;
margin: .5em 0 .5em 0;
`;


const Button = styled.button`
  padding: 14px 18px;
  transition: all 0.2s ease;
  font-weight: 600;
  cursor: pointer;
  border: none;
  border-radius: 1.5em;
  margin: 0 5px;
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hover};
    border-radius: 0.5em;
    box-shadow: 0.2rem 0.2rem 0 0 rgba(255, 255, 255, 0.15);
  }
`;