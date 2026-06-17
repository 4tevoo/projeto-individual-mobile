import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import { SocialButton } from '../../components/SocialButton';

export default function Login() {
    return (
        <LinearGradient colors={theme.colors.backgroundGradient} style={styles.container}>
            <TouchableOpacity style={styles.settingsIconContainer}>
                <Image
                    source={require('../../assets/login/configuracoes-login.png')}
                    style={styles.settingsIcon}
                />
            </TouchableOpacity>
            <Text style={[styles.title, { color: theme.colors.text }]}>Entrar</Text>

            <View style={styles.cardContainer}>
                <View style={styles.row}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        placeholder="Obrigatório"
                        placeholderTextColor={theme.colors.accent}
                        style={styles.input}
                    />
                </View>

                <View style={styles.hr} />

                <View style={styles.row}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Obrigatório"
                        placeholderTextColor={theme.colors.accent}
                        secureTextEntry
                        style={styles.input}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
                <View style={styles.line} />
                <Text style={[styles.dividerText, { color: 'white', fontWeight: 'bold', paddingLeft: 20, paddingRight: 20 }]}>Ou entrar com</Text>
                <View style={styles.line} />
            </View>

            <SocialButton
                label="Playstation"
                color="#2A4367"
                icon={require('../../assets/login/playstation-login.png')}
                artigo="o"
                onPress={() => Linking.openURL('https://www.playstation.com')}
            />
            <SocialButton
                label="Xbox"
                color="#315813"
                icon={require('../../assets/login/xbox-login.png')}
                artigo="o"
                onPress={() => Linking.openURL('https://www.playstation.com')}
            />
            <SocialButton
                label="Nintendo"
                color="#D40015"
                icon={require('../../assets/login/nintendo-login.png')}
                artigo="a"
                onPress={() => Linking.openURL('https://www.playstation.com')}
            />
            <SocialButton
                label="Steam"
                color="#0A0F20"
                icon={require('../../assets/login/steam-login.png')}
                artigo="a"
                onPress={() => Linking.openURL('https://www.playstation.com')}
            />
            <SocialButton
                label="Apple"
                color="#010001"
                icon={require('../../assets/login/apple-login.png')}
                artigo="a"
                onPress={() => Linking.openURL('https://www.playstation.com')}
            />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    settingsIconContainer: { position: 'absolute', top: 50, right: 20, zIndex: 1, },
    settingsIcon: { width: 42, height: 42, tintColor: theme.colors.accent, },
    cardContainer: { backgroundColor: theme.colors.surface, borderRadius: 8, padding: 16, marginBottom: 24, },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
    container: { flex: 1, padding: 24, justifyContent: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 40, paddingTop: 80},
    inputContainer: { marginBottom: 24 },
    label: { fontSize: 14, fontWeight: 'bold', color: 'white', width: 60, textAlign: 'right' },
    input: { flex: 1, textAlign: 'left', marginLeft: 50, fontSize: 14, color: 'white' },
    hr: { height: 1, backgroundColor: '#757067', marginVertical: 12 },
    loginButton: { backgroundColor: theme.colors.accent, padding: 16, alignItems: 'center', borderRadius: 4, marginBottom: 24 },
    loginButtonText: { color: '#18131D', fontWeight: 'bold', fontSize: 16 },
    dividerContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
    line: { flex: 1, height: 1, backgroundColor: '#757067' },
    dividerText: { marginHorizontal: 10, fontSize: 14 }
});