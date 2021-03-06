import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Bruno Nakahara</Text>
                    <Text>
                        Bruno_Nakahara95@yahoo.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Bruno Nakahara" src="https://github.com/bruno-nakahara.png" />
        </Flex>
        )
}