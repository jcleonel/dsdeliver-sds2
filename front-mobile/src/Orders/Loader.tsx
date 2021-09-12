import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import SkeletonContent from "react-native-skeleton-content";

function Loader() {
    return (
        <>
            <View style={styles.container}>            
                <SkeletonContent 
                containerStyle={{flex: 1, width: 300}}
                isLoading={true}
                layout={[
                    { width: 280, height: 28, marginBottom: 6 },
                    { width: 120, height: 20, marginBottom: 6 },
                    { width: 0, height: 0, marginBottom: 30 },
                    { width: 140, height: 20, marginBottom: 6 },
                    { width: 130, height: 20, marginBottom: 6 }
                    ]}
                >                
                    <Text>Carregando pedidos...</Text>         
                </SkeletonContent>
            </View> 
            <View style={styles.container}>            
                <SkeletonContent 
                containerStyle={{flex: 1, width: 300}}
                isLoading={true}
                layout={[
                    { width: 280, height: 28, marginBottom: 6 },
                    { width: 120, height: 20, marginBottom: 6 },
                    { width: 0, height: 0, marginBottom: 30 },
                    { width: 130, height: 20, marginBottom: 6 }
                    ]}
                >                
                    <Text>Carregando pedidos...</Text>         
                </SkeletonContent>
            </View> 
            <View style={styles.container}>            
                <SkeletonContent 
                containerStyle={{flex: 1, width: 300}}
                isLoading={true}
                layout={[
                    { width: 280, height: 28, marginBottom: 6 },
                    { width: 120, height: 20, marginBottom: 6 },
                    { width: 0, height: 0, marginBottom: 30 },
                    { width: 140, height: 20, marginBottom: 6 },
                    { width: 140, height: 20, marginBottom: 6 },
                    { width: 160, height: 20, marginBottom: 6 }
                    ]}
                >                
                    <Text>Carregando pedidos...</Text>         
                </SkeletonContent>
            </View> 
        </>
    )    
}

const styles = StyleSheet.create(
    {
        container: {
          marginTop: '10%',
          marginLeft: '2%',
          marginRight: '2%',
          marginBottom: '2%',
          padding: 15,
          backgroundColor: '#FFF',
          shadowOpacity: 0.25,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 20,
          borderRadius: 10,
          elevation: 5
        }
    }
);

export default Loader;