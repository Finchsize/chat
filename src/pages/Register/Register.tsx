import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface FormValues {
  nickname: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  language: string;
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Center>
      <Box pt="8" w="40%">
        <form onSubmit={onSubmit}>
          <FormControl isInvalid={!!errors.nickname}>
            <FormLabel htmlFor="nickname">Nickname</FormLabel>
            <Input
              {...register("nickname", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="nickname"
            />
            <FormErrorMessage>
              {errors?.nickname && <p>{errors.nickname.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              {...register("firstName", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="first name"
            />
            <FormErrorMessage>
              {errors?.firstName && <p>{errors.firstName.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last name</FormLabel>
            <Input
              {...register("lastName", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="last name"
            />
            <FormErrorMessage>
              {errors?.lastName && <p>{errors.lastName.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="email"
            />
            <FormErrorMessage>
              {errors?.email && <p>{errors.email.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.phoneNumber}>
            <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
            <Input
              {...register("phoneNumber", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="phone number"
            />
            <FormErrorMessage>
              {errors?.phoneNumber && <p>{errors.phoneNumber.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.country}>
            <FormLabel htmlFor="country">Country</FormLabel>
            <Input
              {...register("country", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="country"
            />
            <FormErrorMessage>
              {errors?.country && <p>{errors.country.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.city}>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              {...register("city", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              placeholder="city"
            />
            <FormErrorMessage>
              {errors?.city && <p>{errors.city.message}</p>}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
          <FormLabel htmlFor="language">Language</FormLabel>
          <select {...register("language")}>
            <option value="POLISH">Polish</option>
            <option value="ENGLISH">English</option>
          </select>
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            //   isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Center>
  );
};
