import {
  Box,
  Button,
  Card,
  Form,
  FormInput,
  FormSubmitButton,
  Icon,
  Main,
  getSprinkles,
} from "@alex-mcgovern/boondoggle.design";
import { faHome } from "@fortawesome/pro-solid-svg-icons";

export default function Home() {
  return (
    <>
      <Main>
        <h1>Boondoggle.design</h1>
        <h2>NextJS App Router Demo</h2>

        <Card>
          <Box display="grid" gridTemplateColumns="3x" gap="space_4">
            <Card>
              <h2>Card</h2>
              <p>Lorem ipsum</p>
            </Card>
            <Card>
              <h2>Card</h2>
              <p>Lorem ipsum</p>
            </Card>
            <Card>
              <h2>Card</h2>
              <p>Lorem ipsum</p>
            </Card>
          </Box>
        </Card>
      </Main>
    </>
  );
}
